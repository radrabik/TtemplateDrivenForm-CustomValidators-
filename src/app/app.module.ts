import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { PasswordStrengthDirective } from './directives/password-strength.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PasswordStrengthDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
