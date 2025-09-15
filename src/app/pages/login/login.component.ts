import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({ 
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 })
export class LoginComponent {
  
  username = ''; password = ''; loading = false;
  
  constructor(private auth: AuthService, private router: Router) { }
  
  submit() {
    this.loading = true;
    this.auth.login(this.username, this.password).subscribe({
      next: () => { this.loading=false; this.router.navigate(['/']); },
      error: () => { this.loading=false; alert('Credenciales inválidas'); }
    });
  }

}
