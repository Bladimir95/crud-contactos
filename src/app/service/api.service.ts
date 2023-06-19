import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListacontactosI } from '../modelos/listacontactos.interface';
import { ContactoI } from '../modelos/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private urlApi = 'http://localhost:8080/contactos';

  constructor(private http: HttpClient) { }

  logingByPhone(form: any): boolean{
      if(form.telefono === "7221717171" && form.contrasena === "1234"){
        console.log("true");
        return true;
      }else{
        console.log("false");
        return false;
      }
  }

  getAllContacts(): Observable<ListacontactosI[]>{
    let url = this.urlApi;
    return this.http.get<ListacontactosI[]>(url);
  }

  getSingleContact(id: any):Observable<ContactoI>{
    let url = this.urlApi + '/' + id;  
    return this.http.get<ContactoI>(url);
  }

  putContacto(form:ContactoI){
    this.http.put(this.urlApi, form).subscribe(data => {});
  }

  postContacto(form:ContactoI){
    this.http.post(this.urlApi, form).subscribe(data => {});
  }

  deleteContacto(id: any){
    this.http.delete(this.urlApi + '/' + id).subscribe(data => {});
  }
}
