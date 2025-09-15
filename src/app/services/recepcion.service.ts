import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
@Injectable({ providedIn: 'root' })
export class RecepcionService {
  constructor(private api:ApiService) { }
  listar() { return this.api.get('listar_recepciones'); }
  registrar(data:any) { return this.api.post('registrar_recepcion', data); }
  actualizar(data:any) { return this.api.post('actualizar_recepcion', data); }
  eliminar(id:number) { return this.api.post('eliminar_recepcion', { id }); }
}
