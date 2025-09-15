import { Component, OnInit } from '@angular/core';
import { RecepcionService } from '../../services/recepcion.service';
import { ProductoService } from '../../services/producto.service';
import { ProveedorService } from '../../services/proveedor.service';

@Component({ selector: 'app-recepciones', templateUrl: './recepciones.component.html' })
export class RecepcionesComponent implements OnInit {
  
  recepciones:any[]=[]; productos:any[]=[]; proveedores:any[]=[]; display=false; selected:any=null;
  
  constructor(private svc:RecepcionService, private prod:ProductoService, private prov:ProveedorService){}
  
  ngOnInit(){ this.load(); this.loadCatalogs(); }
  load(){ this.svc.listar().subscribe(res=>this.recepciones=res); }
  loadCatalogs(){ this.prod.listar().subscribe(r=>this.productos=r); this.prov.listar().subscribe(r=>this.proveedores=r); }
  nuevo(){ this.selected=null; this.display=true; }
  edit(r:any){ this.selected={...r}; this.display=true; }
  delete(r:any){ if(!confirm('Eliminar?')) return; this.svc.eliminar(r.id).subscribe(()=>this.load()); }
  onSaved(){ this.display=false; this.load(); }
}
