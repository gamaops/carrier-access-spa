import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'motorista',
    loadChildren: () => import('src/app/driver/driver.module').then(m => m.DriverModule),
  },
  {
    path: '**',
    redirectTo: 'motorista',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
