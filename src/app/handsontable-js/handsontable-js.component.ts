import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Handsontable from 'handsontable';

@Component({
  selector: 'app-handsontable-js',
  templateUrl: './handsontable-js.component.html',
  styleUrls: ['./handsontable-js.component.css']
})
export class HandsontableJSComponent implements OnInit, AfterViewInit {
  container1;
  hot1;
  exportPlugin1;
  constructor() { }

  ngAfterViewInit() {
    this.container1 = document.getElementById('example1');
    this.hot1 = new Handsontable(this.container1, {
      data: Handsontable.helper.createSpreadsheetData(7, 7),
      colHeaders: true,
      rowHeaders: true,
      hiddenRows: { rows: [1, 3, 5], indicators: true },
      hiddenColumns: { columns: [1, 3, 5], indicators: true }

    });
    this.exportPlugin1 = this.hot1.getPlugin('exportFile');

  }

  ngOnInit() {
  }

  export() {
    this.exportPlugin1.downloadFile('csv', {
      bom: false,
      columnDelimiter: ',',
      columnHeaders: false,
      exportHiddenColumns: true,
      exportHiddenRows: true,
      fileExtension: 'csv',
      filename: 'Handsontable-CSV-file_[YYYY]-[MM]-[DD]',
      mimeType: 'text/csv',
      rowDelimiter: '\r\n',
      rowHeaders: true
    });
  }

}
