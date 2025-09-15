import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service';
@Component({ selector: 'app-proveedores', templateUrl: './proveedores.component.html' })
export class ProveedoresComponent implements OnInit {
  
  proveedores:any[]=[]; display=false; selected:any=null;
  constructor(private svc:ProveedorService){}
  
  ngOnInit(){ this.load(); }
  load(){ this.svc.listar().subscribe(res=>this.proveedores=res); }
  nuevo(){ this.selected=null; this.display=true; }
  edit(p:any){ this.selected={...p}; this.display=true; }
  delete(p:any){ if(!confirm('Eliminar?')) return; this.svc.eliminar(p.id).subscribe(()=>this.load()); }
  onSaved(){ this.display=false; this.load(); }
}
