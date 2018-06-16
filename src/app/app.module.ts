import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageSelectComponent } from './page-select/page-select.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServiceListComponent } from './service-list/service-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PageSelectComponent,
    TopbarComponent,
    ServiceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
