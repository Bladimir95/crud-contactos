import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit{

  nuevoForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    telefono: new FormControl(''),
    edad: new FormControl('')
  });

  constructor(private activeRouter: ActivatedRoute, private router: Router, private api: ApiService){}

  ngOnInit(): void {
    
  }

  postForm(form: any){
    this.api.postContacto(form);
    this.router.navigate(['dashboard']);
  }

  regresar(){
    this.router.navigate(['dashboard']);
  }
}
