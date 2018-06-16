import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSelectComponent } from './page-select/page-select.component';
import { ServiceListComponent } from './service-list/service-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/select', pathMatch: 'full' },
  { path: 'select', component: PageSelectComponent },
  { path: 'services', component: ServiceListComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
