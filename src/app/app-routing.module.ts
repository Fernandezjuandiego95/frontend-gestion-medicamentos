import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';  
import { ProductosComponent } from './pages/productos/productos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { RecepcionesComponent } from './pages/recepciones/recepciones.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,       
    canActivate: [AuthGuard],         
    children: [
      { path: '', redirectTo: 'productos', pathMatch: 'full' }, 
      { path: 'productos', component: ProductosComponent },
      { path: 'proveedores', component: ProveedoresComponent },
      { path: 'recepciones', component: RecepcionesComponent }
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
