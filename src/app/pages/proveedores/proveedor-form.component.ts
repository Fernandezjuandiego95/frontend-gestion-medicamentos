import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from '../../services/proveedor.service';
@Component({ selector: 'app-proveedor-form', templateUrl: './proveedor-form.component.html' })
export class ProveedorFormComponent implements OnChanges {
  @Input() proveedor:any=null; @Output() saved=new EventEmitter<void>();
  form:FormGroup; saving=false;
  
  constructor(private fb:FormBuilder, private svc:ProveedorService){ 
    this.form=this.fb.group({ 
      id:[null], 
      tipo_identificacion:['',Validators.required], 
      numero_identificacion:['',Validators.required], 
      razon_social:['',Validators.required], 
      direccion:[''], 
      nombre_contacto:[''], 
      celular:[''], 
      actividad_economica:[''] }); }
  
  ngOnChanges(){ if(this.proveedor) this.form.patchValue(this.proveedor); else this.form.reset(); }
  
  submit(){ 
    if(this.form.invalid) { this.form.markAllAsTouched(); return; } 
    const data=this.form.value; 
    if(data.id) this.svc.actualizar(data).subscribe(()=>this.saved.emit()); 
    else this.svc.registrar(data).subscribe(()=>this.saved.emit()); }
}
