import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'test1', component: Page1Component},
      {path: 'test2', component: Page2Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
