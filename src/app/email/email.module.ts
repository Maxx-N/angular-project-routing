import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { EmailResolver } from './email.resolver';

const routes: Routes = [
  {
    path: '',
    component: EmailComponent,
    children: [
      {
        path: ':id',
        component: EmailDetailComponent,
        resolve: { email: EmailResolver },
      },
    ],
  },
];

@NgModule({
  declarations: [EmailComponent, EmailDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
})
export class EmailModule {}
