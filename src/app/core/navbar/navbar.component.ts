import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuth$ = this.authService.isAuth$;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onNavigateToAuth() {
    this.router.navigate(['auth']);
  }
}
