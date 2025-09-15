import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
@Injectable({ providedIn: 'root' })
export class ProveedorService {
  
  constructor(private api:ApiService) { }
  
  listar() { return this.api.get('listar_proveedores'); }
  registrar(data:any) { return this.api.post('registrar_proveedor', data); }
  actualizar(data:any) { return this.api.post('actualizar_proveedor', data); }
  eliminar(id:number) { return this.api.post('eliminar_proveedor', { id }); }
}
