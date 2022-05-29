import { Component, OnInit } from '@angular/core';
import { SpecialColorService } from '../../services/special-color.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  constructor(private specialColor: SpecialColorService) { }

  specialActualColor = this.specialColor.getSpecialColor();

  proyectsInfo = [
    {
      image: "../../../assets/images/proyect_auto.png",
      name: "autoApp",
      description: "auto_app_info",
      url: "http://autoappp.herokuapp.com",
      tecnologies: "php | laravel | bootstrap | mysql | jquery"
    },
    {
      image: "../../../assets/images/proyect_games.jpg",
      name: "my_list",
      description: "my_list_info",
      url: "http://mislistas.herokuapp.com",
      tecnologies: "php | laravel | bootstrap | mysql | jquery"
    }
  ];

  ngOnInit(): void {
    this.specialColor.specialColorObservable.subscribe(color => {
      this.specialActualColor = color;
    });
  }

}
