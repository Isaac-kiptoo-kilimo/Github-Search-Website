import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomesComponent } from '../pages/homes/homes.component';

const routes: Routes = [
  {
    path: 'github',
    component: HomesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomRoutingRoutingModule { }
