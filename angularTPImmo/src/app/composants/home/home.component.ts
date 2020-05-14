import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public personnes = [];

  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.personneService.getPersonne().subscribe(
      data => this.personnes = data
    );
  }
  

}
