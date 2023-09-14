import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmailComponent } from './email/email.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { EmailDetailComponent } from './email/email-detail/email-detail.component';
import { EmailResolver } from './email/email.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'email',
    loadChildren: () =>
      import('./email/email.module').then((m) => m.EmailModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
