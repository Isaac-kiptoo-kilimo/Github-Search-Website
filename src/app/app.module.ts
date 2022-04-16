import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';
import { HomesComponent } from './pages/homes/homes.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    NavbarComponent,
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule, 
    CustomRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
