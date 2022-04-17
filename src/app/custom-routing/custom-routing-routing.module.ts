import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from '../pages/github/repos/repos.component';
import { GithubComponent } from '../pages/github/github.component';
import { RepoviewComponent } from '../pages/github/repos/repoview/repoview.component';
import { UsersComponent } from '../pages/github/users/users.component';
// import { HomesComponent } from '../pages/homes/homes.component';
import { UserviewComponent } from '../pages/github/users/userview/userview.component';

const routes: Routes = [
  {
    path: '',
    component: GithubComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:username',
        component: UserviewComponent
      },
      {
        path: 'repositories',
        component: ReposComponent,
      },
      {
        path: 'repositories/:username/:reponame',
        component: RepoviewComponent
      }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomRoutingRoutingModule { }
