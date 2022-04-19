import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';
import { HomesComponent } from './pages/homes/homes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './pages/github/users/users.component';
import { UserComponent } from './components/user/user.component';
import { ReposComponent } from './pages/github/repos/repos.component';
import { RepoviewComponent } from './pages/github/repos/repoview/repoview.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UserviewComponent } from './pages/github/users/userview/userview.component';
import { GithubComponent } from './pages/github/github.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NotfoundComponent } from './pages/notfound/notfound.component';
import { GithubDirective } from './directives/github.directive';
import { GithubPipe } from './pipes/github.pipe';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    NavbarComponent,
    UsersComponent,
    UserComponent,
    ReposComponent,
    RepoviewComponent,
    LoaderComponent,
    UserviewComponent,
    GithubComponent,
    NotfoundComponent,
    GithubDirective,
    GithubPipe,
    FooterComponent,
    
  ],
 
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule,
    CustomRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
