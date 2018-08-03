import { Injectable } from '@angular/core';
import { Utils } from './utils';

declare global {
  interface Window {
    console: Console;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor() {
    console.log('ConsoleService constructor');
    const origConsole = window.console;

    const aiConsole = {
      info: function (args) {
        origConsole.info(args);
        this.aiLog(args);
      },
      error: function (args) {
        origConsole.error(args);
        this.aiLog(args);
      },
      warn: function (args) {
        origConsole.warn(args);
        this.aiLog(args);
      },
      log: function (args) {
        origConsole.log(args);
        this.aiLog(args);
      },
      aiLog: function (args) {
        // Todo: send to application insights
      }
    };

    // appendObjects is used to fill aiConsole with methods that original console has
    window.console = Utils.appendObjects(aiConsole, origConsole);
  }
}
