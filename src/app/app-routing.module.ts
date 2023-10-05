import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { GlobalFilterComponent } from './components/global-filter/global-filter.component';
import { GlobalListItemComponent } from './components/global-list-item/global-list-item.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate:[AuthGuard], children:[
    {path:'list', component: GlobalFilterComponent},
    {path:'list/:id', component: GlobalListItemComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
