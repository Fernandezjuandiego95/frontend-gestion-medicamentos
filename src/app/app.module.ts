import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoFormComponent } from './pages/productos/producto-form.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { ProveedorFormComponent } from './pages/proveedores/proveedor-form.component';
import { RecepcionesComponent } from './pages/recepciones/recepciones.component';
import { RecepcionFormComponent } from './pages/recepciones/recepcion-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { JwtInterceptor } from './core/jwt.interceptor';
import { AuthGuard } from './core/auth.guard';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductosComponent,
    ProductoFormComponent,
    ProveedoresComponent,
    ProveedorFormComponent,
    RecepcionesComponent,
    RecepcionFormComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ToastModule,
    ToolbarModule,
    CardModule,
    DropdownModule,
    MenubarModule
  ],
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

