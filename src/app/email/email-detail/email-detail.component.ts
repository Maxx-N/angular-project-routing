import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css'],
})
export class EmailDetailComponent implements OnInit {
  email$: Observable<Email | undefined>;

  constructor(
    private route: ActivatedRoute
  ) {
    this.email$ = this.route.data.pipe(
      map((data) => {
        return data['email'];
      })
    );
  }

  ngOnInit(): void {}
}
