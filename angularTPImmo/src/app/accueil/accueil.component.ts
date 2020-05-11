import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  images = ["assets/images/caroussel/maison_1_1.jpg",
            "assets/images/caroussel/bureau_1_1.jpg",
            "assets/images/caroussel/commerce_1_1.jpg",
            "assets/images/caroussel/entrepot_1_1.jpg",
            "assets/images/caroussel/appartement_1_1.jpg",
            "assets/images/caroussel/studio_1_1.jpg",
            "assets/images/caroussel/terrain_1_1.jpg"
          ]
  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }

}
