import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';
import { HomesComponent } from './pages/homes/homes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './github/users/users.component';
import { UserComponent } from './components/user/user.component';
import { ReposComponent } from './pages/github/repos/repos.component';
import { RepoviewComponent } from './pages/github/repos/repoview/repoview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    NavbarComponent,
    UsersComponent,
    UserComponent,
    ReposComponent,
    RepoviewComponent,
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    CustomRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
