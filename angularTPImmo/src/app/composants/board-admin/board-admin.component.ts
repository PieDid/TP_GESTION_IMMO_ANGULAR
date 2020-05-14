import { Component, OnInit } from '@angular/core';
import { AdministrateurService } from 'src/app/services/administrateur.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  public admins = [];

  constructor(private administrateurService: AdministrateurService) { }

  ngOnInit(): void {
    this.administrateurService.getAllAdministrateur().subscribe(
      data => this.admins = data
    );
  }

}
