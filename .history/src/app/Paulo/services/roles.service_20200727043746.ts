import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../model/respuesta';
import { Rol } from '../model/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private GET_ROL_URL:string = 'http://localhost:8090/MediCiteServer/srv/usuarios/listado';

  constructor(private http: HttpClient) {}
  getRoles(): Observable<any[]>{
    return this.http.get<Rol[]>(this.GET_ROL_URL);
  }
}
