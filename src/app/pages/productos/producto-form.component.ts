import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';

@Component({ selector: 'app-producto-form', templateUrl: './producto-form.component.html' })
export class ProductoFormComponent implements OnChanges {

  @Input() producto:any=null; @Output() saved=new EventEmitter<void>();
  form:FormGroup; saving=false;

  constructor(private fb:FormBuilder, private svc:ProductoService){ 
    this.form=this.fb.group({ 
      id:[null], 
      codigo:['',Validators.required], 
      nombre:['',Validators.required], 
      descripcion:['',Validators.required], 
      estado:['',Validators.required], 
      laboratorio:['',Validators.required] 
    }); 
  }
  
  ngOnChanges(){ if(this.producto) this.form.patchValue(this.producto); else this.form.reset({estado:'Activo'}); }
  submit(){ if(this.form.invalid) { this.form.markAllAsTouched(); return; } const data=this.form.value; if(data.id) this.svc.actualizar(data).subscribe(()=>this.saved.emit()); else this.svc.registrar(data).subscribe(()=>this.saved.emit()); }
}
