import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// import { MatInputModule } from '@angular/material/input';
// import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { RegisterInputComponent } from './internal/account-manage/container/register-input/register-input.component';
import { InputCardComponent } from './internal/account-manage/components/input-card/input-card.component';

@NgModule({
  declarations: [AppComponent, RegisterInputComponent, InputCardComponent],
  imports: [BrowserModule, AppRoutingModule, MatFormFieldModule, MatLabel],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
