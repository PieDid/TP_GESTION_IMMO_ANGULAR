import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTPImmo';
  images = ["assets/images/trombi/Alexandra_Roux.png","assets/images/trombi/Camille_Resten.png","assets/images/trombi/Andre_Fernandes.png","assets/images/trombi/Erwann_Collomb.png" ]
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
 