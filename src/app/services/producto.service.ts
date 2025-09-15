import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
@Injectable({ providedIn: 'root' })
export class ProductoService {
  
  constructor(private api:ApiService) { }
  
  listar() { return this.api.get('listar_productos'); }
  registrar(data:any) { return this.api.post('registrar_producto', data); }
  actualizar(data:any) { return this.api.post('actualizar_producto', data); }
  eliminar(id:number) { return this.api.post('eliminar_producto', { id }); }
}
