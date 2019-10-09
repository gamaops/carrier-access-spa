import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from 'src/app/driver/entry/entry.component';
import { SignupComponent } from 'src/app/driver/signup/signup.component';
import { ValidationComponent } from 'src/app/driver/validation/validation.component';

const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
  },
  {
    path: 'novo',
    component: SignupComponent,
  },
  {
    path: 'validacao/:id',
    component: ValidationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
