import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onError() {
    console.error('Page1Component Error was pressed');
  }

  onInfo() {
    console.info('Page1Component Info was pressed');
  }

  onWarning() {
    console.warn('Page1Component Warning was pressed');
  }

  onLog() {
    console.log('Page1Component Log was pressed');
  }
}
