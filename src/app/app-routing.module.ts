
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/menu/home/home.component';


const routes: Routes = [

  {
   path: 'user', loadChildren: () => import('./modules/user/user-routing.module').then( m=> m.AppRoutingModule)

  },
  {path: 'home', component: HomeComponent},
  {
    path: '',
    redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
