import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactPageComponent, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsPageComponent, canActivate: [AuthGuard] },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolverService },
},
{ path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolverService } },
{ path: 'edit', component: ContactEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
