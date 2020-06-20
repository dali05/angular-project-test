import {Directive, ElementRef, OnInit, Input, HostListener, OnChanges, SimpleChanges} from '@angular/core';

import $ from 'jquery';
import {FormGroup} from '@angular/forms';
import {BehaviorSubject, combineLatest, Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[detectUnsavedChanges]'
})
export class DetectUnsavedChangesDirective implements OnInit {

  @Input() public currentForm: FormGroup;
  @Input() public changeInput: any;
  change;
  oldForm = {};
  ngOnInit() {
    this.oldForm = this.currentForm.value;
    this.currentForm.valueChanges.subscribe(valueChanges => {
      this.isFormModified(this.oldForm, this.currentForm.value);
    })
  }
  isFormModified(oldForm , currentForm){
    let detectedDiffrence = false;
      Object.keys(oldForm).forEach((key) => {
        if(typeof oldForm[key] === 'object') {
          this.isFormModified(oldForm[key], currentForm[key]);
        } else {

          if((currentForm[key] === null  && oldForm[key] === "") ||
            (currentForm[key] === ""  && oldForm[key] === null) ||
            (currentForm[key] === null  && oldForm[key] === undefined) ||
            (currentForm[key] === undefined  && oldForm[key] === null) ||
            (currentForm[key] === undefined  && oldForm[key] === "") ||
            (currentForm[key] === ""  && oldForm[key] === undefined)
          ) {
            return;
          }

         else if(currentForm[key] !== oldForm[key]) {
            console.clear();
            console.log('DIFFRENCE IN : ', key + ' => default value is:  ' +  oldForm[key] + ' and the changed value is: ' +  currentForm[key]);
            detectedDiffrence = true;
          }
        }
      }, this);
  }
}



