import { Component, OnInit } from '@angular/core';
import { SpecialColorService } from '../../services/special-color.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private specialColor: SpecialColorService) { }
  specialActualColor = this.specialColor.getSpecialColor();
  ngOnInit(): void {
    this.specialColor.specialColorObservable.subscribe(color => {
      this.specialActualColor = color;
    });
  }
}
