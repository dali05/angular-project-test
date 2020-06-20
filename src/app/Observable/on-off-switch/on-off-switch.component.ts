import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-on-off-switch',
  templateUrl: './on-off-switch.component.html',
  styleUrls: ['./on-off-switch.component.css']
})
export class OnOffSwitchComponent implements AfterViewInit {

  name = 'Angular 5';
@ViewChild('dali', {read: ElementRef})
  dali;// :o)
  ele: Element;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit()
  {

    this.ele = document.getElementById('d');
    let clickStream = Observable.fromEvent(this.ele, 'keypress');


    clickStream.subscribe(evt => {
      var checkbox = document.getElementById('myonoffswitch')
      if (evt.key === ' ') {
        checkbox.checked = !checkbox.checked;
        this.switchChanged();
      } else if (evt.key === 'Enter') {
        // .form returns a reference to the parent form
        checkbox.form.submit();
      }


    });


  }


  switchChanged()
  {
    console.log("test");
  }


}
