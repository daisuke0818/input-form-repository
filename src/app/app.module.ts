import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { RegisterInputComponent } from './internal/account-manage/container/register-input/register-input.component';
import { InputCardComponent } from './internal/account-manage/components/input-card/input-card.component';

@NgModule({
  declarations: [AppComponent, RegisterInputComponent, InputCardComponent],
  imports: [BrowserModule, AppRoutingModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
