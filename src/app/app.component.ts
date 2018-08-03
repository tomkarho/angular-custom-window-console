import { Component } from '@angular/core';
import { ConsoleService } from './console.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lb20180703';

  constructor(s: ConsoleService) {
    console.log('wtf');
    console.info('wtf');
    console.error('wtf');
    console.warn('wtf');
  }
}
