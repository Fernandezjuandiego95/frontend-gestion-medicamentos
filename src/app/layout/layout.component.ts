import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      { label: 'Productos', icon: 'pi pi-box', routerLink: '/productos' },
      { label: 'Proveedores', icon: 'pi pi-users', routerLink: '/proveedores' },
      { label: 'Recepciones', icon: 'pi pi-truck', routerLink: '/recepciones' }
    ];
  }

  logout() {
  localStorage.removeItem('token');   
  this.router.navigate(['/login']);
}
}






