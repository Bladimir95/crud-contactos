import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactoI } from 'src/app/modelos/contacto.interface';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  constructor(private activeRouter: ActivatedRoute, private router: Router, private api: ApiService){}

  datosContacto: ContactoI = {id: new Uint8Array(0), nombre: '', telefono: '', edad: ''};

  editarForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    telefono: new FormControl(''),
    edad: new FormControl('')
  });

  ngOnInit(): void {
    let contactoId = this.activeRouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.getSingleContact(contactoId).subscribe(data => {
      this.datosContacto = data;
      this.editarForm.setValue({
        'id': this.datosContacto.id.toString(),
        'nombre': this.datosContacto.nombre.toString(),
        'telefono': this.datosContacto.telefono.toString(),
        'edad': this.datosContacto.edad.toString()
      });
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form: any){
    this.api.putContacto(form);
    this.router.navigate(['dashboard']);
  }

  regresar(){
    this.router.navigate(['dashboard']);
  }
  
}
