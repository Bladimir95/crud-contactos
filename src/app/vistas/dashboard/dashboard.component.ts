import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ListacontactosI } from 'src/app/modelos/listacontactos.interface';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  searchTerm$ = new Subject<string>();
  
  contactos: ListacontactosI[] = [];

  constructor(private api: ApiService, private router:Router){}

  ngOnInit(): void {
    this.api.getAllContacts().subscribe(data => {
      this.contactos = data;
    });
  }

  editarContacto(id: any){
    this.router.navigate(['editar', id])
  }

  crearContacto(){
    this.router.navigate(['nuevo'])
  }

  eliminarContacto(contactoId: any){
    this.api.deleteContacto(contactoId);
    this.router.navigate(['dashboard']);
  }

  filteredList(){
    
  }
  
}
