import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../model/rol';
import { RolesService } from '../services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage implements OnInit {

  roles: Observable<Rol[]>;

  constructor(private consultaService: RolesService) { }

  ngOnInit() {
  }

}
