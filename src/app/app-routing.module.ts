import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomesComponent } from './pages/homes/homes.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [

  {
    path: '',
    component: HomesComponent,
    data: {
      username: 'isaac-kiptoo-kilimo'
    },
    // pathMatch: 'full',
  },
  
  // {
  //   path: 'github',
  //   component: GithubComponent,
  //   loadChildren: () => import('./custom-routing/custom-routing.module').then(m => m.CustomRoutingModule),
  // },
  {
    path: '**',
    component: NotfoundComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
