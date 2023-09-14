import { Injectable } from '@angular/core';
import { Email } from './email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  emails: Email[] = [
    { id: 1, title: 'Title 1', content: 'Content 1' },
    { id: 2, title: 'Title 2', content: 'Content 2' },
    { id: 3, title: 'Title 3', content: 'Content 3' },
  ];

  constructor() {}

  getEmailById(id: number): Email | undefined {
    return this.emails.find((email) => email.id === id);
  }
}
