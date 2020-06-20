import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-chiled',
  templateUrl: './chiled.component.html',
  styleUrls: ['./chiled.component.css']
})
export class ChiledComponent implements OnInit, OnChanges {
  @Input() dali: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dali + 'change from parent ', changes);
  }

}
