import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecepcionService } from '../../services/recepcion.service';

@Component({ selector: 'app-recepcion-form', templateUrl: './recepcion-form.component.html' })
export class RecepcionFormComponent implements OnChanges {
  @Input() recepcion:any=null; @Input() productos:any[]=[]; @Input() proveedores:any[]=[]; @Output() saved=new EventEmitter<void>();
  form:FormGroup; saving=false;
  
  constructor(private fb:FormBuilder, private svc:RecepcionService){ 
    this.form=this.fb.group({ 
      id:[null], 
      numero_factura:['',Validators.required], 
      cantidad:[1,Validators.required], 
      lote:['', Validators.required], 
      registro_invima:['',Validators.required], 
      fecha_hora:[''], 
      fecha_vencimiento:['',Validators.required], 
      descripcion_estado_producto:['',Validators.required], 
      id_producto:[null,Validators.required], 
      id_proveedor:[null,Validators.required] }); }
  
  ngOnChanges(){ if(this.recepcion) this.form.patchValue(this.recepcion); else this.form.reset(); }
 
  submit(){ if(this.form.invalid){ this.form.markAllAsTouched(); return;} 
  const data=this.form.value; 
  
    if (data.id) {
      this.svc.actualizar(data).subscribe(() => {
        this.saved.emit();
        this.form.reset();
      });
    } else {
      this.svc.registrar(data).subscribe(() => {
        this.saved.emit();
        this.form.reset();
      });
    }
  }
}
