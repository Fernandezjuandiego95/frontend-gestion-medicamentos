import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({ selector: 'app-productos', templateUrl: './productos.component.html' })
export class ProductosComponent implements OnInit {

  productos:any[]=[]; display=false; selected:any=null;
 
  constructor(private svc: ProductoService) { }
  
  ngOnInit() { this.load(); }
  load(){ this.svc.listar().subscribe(res=>this.productos=res); }
  nuevo(){ this.selected=null; this.display=true; }
  edit(p:any){ this.selected={...p}; this.display=true; }
  delete(p:any){ if(!confirm('Eliminar?')) return; this.svc.eliminar(p.id).subscribe(()=>this.load()); }
  onSaved(){ this.display=false; this.load(); }
}
