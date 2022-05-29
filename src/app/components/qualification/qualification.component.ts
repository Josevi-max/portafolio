import { Component, OnInit } from '@angular/core';
import { SpecialColorService } from '../../services/special-color.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {

  constructor(private specialColor: SpecialColorService) { }
  specialActualColor = this.specialColor.getSpecialColor();
  ngOnInit(): void {
    this.specialColor.specialColorObservable.subscribe(color => {
      this.specialActualColor = color;
    });
  }

}
