import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectScreenComponent } from './select-screen/select-screen.component';
import { ResultScreenComponent } from './result-screen/result-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/select', pathMatch: 'full' },
  { path: 'select', component: SelectScreenComponent },
  { path: 'services', component: ResultScreenComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
