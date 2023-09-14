import { Component, OnInit } from '@angular/core';
import { Email } from './email';
import { EmailService } from './email.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  emails = this.emailService.emails;

  constructor(
    private emailService: EmailService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onNavigateToEmail(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
