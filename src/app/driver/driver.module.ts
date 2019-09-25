import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { DriverRoutingModule } from 'src/app/driver/driver.routes';

import { EntryComponent } from 'src/app/driver/entry/entry.component';
import { SignupComponent } from 'src/app/driver/signup/signup.component';

@NgModule({
  declarations: [
    EntryComponent,
    SignupComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    DriverRoutingModule,
    SharedModule.forRoot(),
  ]
})
export class DriverModule { }
