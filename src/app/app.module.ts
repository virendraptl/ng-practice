import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTestDirective } from './custom-test.directive';
import { CustomTestPipe } from './custom-test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomTestDirective,
    CustomTestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
