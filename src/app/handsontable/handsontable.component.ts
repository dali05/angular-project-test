import { Component, OnInit } from '@angular/core';
import {ExcelService} from '../excel.service';

@Component({
  selector: 'app-handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.css']
})
export class HandsontableComponent implements OnInit {

  private data: any[] = [{}];
  private colHeaders: string[] = [];
  tarif;
  combi;
  option;
  showXls = false;
  constructor(private excelService:ExcelService) { }

  ngOnInit() {
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
  private columns: any[] = [
    // {
    //   data: 'id'
    // },
    // {
    //   data: 'first',
    //   renderer: 'text',
    // },
    // {
    //   data: 'address',
    //   type: 'dropdown',
    //   source: ["yellow", "red", "orange", "green", "blue", "gray", "black", "white"]
    // },
    // {
    //   data: 'price',
    //   type: 'numeric',
    //   numericFormat: { pattern: '$0,0.00', culture: 'en-US' }
    // },
  ];
  private options: any = {
    stretchH: 'all',
    columnSorting: true,
    contextMenu: true,
    startRows: 15,
    minSpareRows: 3,
  };

  private afterChange(e: any) {
    // tslint:disable-next-line:no-console
    this.data.forEach(function (value) {
      console.log('data: ' + value);
    });
  }
  private beforeChange(e: any) {
    console.log(e);
  }
  ShowXLS() {
    for(let i = 0; i<this.tarif; i++) {
      this.colHeaders.push('tarif ' + (i+1));
    }
    for(let j = 0; j<this.combi; j++) {
      this.colHeaders.push('combi ' + (j+1));
    }
    for(let k = 0; k<this.option; k++) {
      this.colHeaders.push('option ' + (k+1));
    }
    for(let e = 0; e<this.colHeaders.length; e++) {
      if(this.colHeaders[e] === 'combi 1') {
        this.columns.push({data: this.colHeaders[e], type: 'dropdown',
          source: ["yellow", "red", "orange", "green", "blue", "gray", "black", "white"]})
      } else if(this.colHeaders[e] === 'option 1') {
        this.columns.push({data: this.colHeaders[e], type: 'numeric',
          numericFormat: {
            pattern: '0,00',
            culture: 'en-US'
          }})
      } else {
        this.columns.push({data: this.colHeaders[e]})
      }

    }
    this.showXls = true;

  }

}
