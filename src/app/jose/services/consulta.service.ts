import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { consulta } from '../models/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private GET_CONSULTA_URL:string = 'http://localhost:8090/MediCiteServer/rs/consultas/listar';

  constructor(private http: HttpClient) { }

  getConsulta(): Observable<any[]>{

    return this.http.get<consulta[]>(this.GET_CONSULTA_URL);

  }
}
