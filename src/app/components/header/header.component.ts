import { Component, OnInit } from '@angular/core';
import {NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';
import { SpecialColorService } from '../../services/special-color.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private offcanvasService: NgbOffcanvas, private specialColor: SpecialColorService) { }

  closeResult = '';
  specialActualColor = this.specialColor.getSpecialColor();

  ngOnInit(): void {
  }

  open(content:any) {
    this.offcanvasService.open(content, {ariaLabelledBy: 'offcanvas-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
}
