import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Respuesta } from '../model/respuesta';
import { Medicamento } from '../model/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private SEND_MEDICAMENTO_URL:string = 'http://localhost:8090/MediCiteServer/rs/medicamentos/guardarMedicamento';

  constructor(private http: HttpClient) { }

  sendMedicamento(medicamento: Medicamento): Observable<any> {
    return this.http.post<Respuesta>(this.SEND_MEDICAMENTO_URL, medicamento);
  }

}
