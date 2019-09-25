import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from 'src/app/driver/entry/entry.component';
import { SignupComponent } from 'src/app/driver/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
  },
  {
    path: 'novo',
    component: SignupComponent,
  },
];

export const DriverRoutingModule = RouterModule.forChild(routes);
