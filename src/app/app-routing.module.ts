import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LandingComponent } from './landing/landing.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { LoginComponent } from './login/login.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CombinedviewComponent } from './combinedview/combinedview.component';
import { LoginactualComponent } from './loginactual/loginactual.component';

const routes: Routes = [
  
  {path:'home',component:CombinedviewComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'menu',component:ProductlistComponent},
  {path:'reviews',component:TestimonialsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'loginactual',component:LoginactualComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
