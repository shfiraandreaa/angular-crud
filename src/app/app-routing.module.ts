import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from "./landing-page/LandingPageComponent";

const routes: Routes = [

  {
    path:'',
    component: LandingPageComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./administrator/administrator.module').then(mod=>mod.AdministratorModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
