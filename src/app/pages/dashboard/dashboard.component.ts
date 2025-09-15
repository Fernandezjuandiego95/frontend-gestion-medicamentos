import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html' })
export class DashboardComponent {
  constructor(public router: Router, private auth: AuthService) { }
  logout() { this.auth.logout(); this.router.navigate(['/login']); }
}
