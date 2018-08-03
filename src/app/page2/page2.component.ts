import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

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
