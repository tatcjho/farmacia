import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { consulta } from '../jose/models/consulta';
import { ConsultaService } from './services/consulta.service';

@Component({
  selector: 'app-jose',
  templateUrl: './jose.page.html',
  styleUrls: ['./jose.page.scss'],
})
export class JosePage implements OnInit {

  consultas: Observable<consulta[]>;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {

    this.consultas = this.consultaService.getConsulta()

    
  }

}
