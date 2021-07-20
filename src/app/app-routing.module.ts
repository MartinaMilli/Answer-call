import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PozivUTijekuComponent } from './poziv-u-tijeku/poziv-u-tijeku.component';
import { PozivComponent } from './poziv/poziv.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'poziv', component: PozivComponent},
  {path: 'poziv-u-tijeku', component: PozivUTijekuComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
