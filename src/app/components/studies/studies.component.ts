import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  @Input() color:any;
  @Input() title:any;
  @Input() date:any;
  @Input() company:any;
  @Input() aboutCompany:any;
  @Input() url:any;

  @Input() listItem1:any;
  @Input() listItem2:any;
  @Input() listItem3:any;
  @Input() listItem4:any;
  @Input() listItem5:any;
  @Input() listItem6:any;
  @Input() listItem7:any;
  @Input() listItem8:any;
  constructor() { }

  ngOnInit(): void {
  }

}
