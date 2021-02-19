import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component'
import { LoginComponent} from './login/login.component'
import { RentComponent} from './rent/rent.component'
import { DashboardComponent} from './dashboard/dashboard.component'

const routeLoginoutes = [];
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Rent', component: RentComponent},
  {path: 'Dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
