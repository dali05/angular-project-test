import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FirstComponent} from '../first/first.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit, AfterViewInit {
  @ViewChild(FirstComponent)
  firstComponent: FirstComponent;

  constructor() {
  }

  ngOnInit() {


  }

  ngAfterViewInit() {
    console.log(this.firstComponent);
  }

}
