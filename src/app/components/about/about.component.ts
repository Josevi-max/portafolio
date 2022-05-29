import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { SpecialColorService } from '../../services/special-color.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [NgbProgressbarConfig],

})
export class AboutComponent implements OnInit {

  constructor(config: NgbProgressbarConfig, private specialColor: SpecialColorService) {
    // customize default values of progress bars used by this component tree
    config.max = 10;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }

  TIME_LOAD_ANIMATION_PROGRESS_BAR = 150;

  specialActualColor = this.specialColor.getSpecialColor();

  backTecnologies = [
    { language: 'Php', maxValue: 8, actualValue: 0 },
    { language: 'Laravel', maxValue: 9, actualValue: 0 },
    { language: 'Java', maxValue: 7, actualValue: 0 }
  ];

  frontTecnologies = [
    { language: 'Angular', maxValue: 7, actualValue: 0 },
    { language: 'Bootstrap', maxValue: 9, actualValue: 0 },
    { language: 'Js', maxValue: 8, actualValue: 0 },
    { language: 'Html / Css', maxValue: 9, actualValue: 0 },
    { language: 'Angular js', maxValue: 5, actualValue: 0 },
    { language: 'Jquery', maxValue: 8, actualValue: 0 },
  ];

  bd = [
    { language: 'Mysql', maxValue: 7, actualValue: 0 },
  ];

  control = [
    { language: 'Git', maxValue: 8, actualValue: 0 },
  ];

  so = [
    { language: 'command', maxValue: 8, actualValue: 0 },
  ];

  ide = [
    { language: 'Visual studio code', maxValue: 8, actualValue: 0 },
  ];


  progressBar(tecnology: any): void {
    var maxValue = tecnology['maxValue'];
    var actualValue = tecnology['actualValue'];
    if ((actualValue + 1) <= maxValue) {
      tecnology['actualValue'] = ++actualValue;
      setTimeout(() => {
        this.progressBar(tecnology);
      }, this.TIME_LOAD_ANIMATION_PROGRESS_BAR);
    }
  }

  ngOnInit(): void {
    for (let value of this.backTecnologies) {
      this.progressBar(value);
    }
    for (let value of this.frontTecnologies) {
      this.progressBar(value);
    }
    for (let value of this.bd) {
      this.progressBar(value);
    }
    for (let value of this.control) {
      this.progressBar(value);
    }
    for (let value of this.so) {
      this.progressBar(value);
    }
    for (let value of this.ide) {
      this.progressBar(value);
    }

    this.specialColor.specialColorObservable.subscribe(color => {
      this.specialActualColor = color;
    });
  }
}
