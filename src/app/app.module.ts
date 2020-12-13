import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// アカウントのモジュール群
import { CommonModule } from '@angular/common';
// import { AccountStoreModule } from './internal/account-manage/account-store/account-store.module';
import { MaterialModule } from './material.module';
import { InputCardComponent } from './internal/account-manage/components/input-card/input-card.component';
import { RegisterInputComponent } from './internal/account-manage/container/register-input/register-input.component';

@NgModule({
  declarations: [AppComponent, RegisterInputComponent, InputCardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, CommonModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
