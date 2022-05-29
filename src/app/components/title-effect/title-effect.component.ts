import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-title-effect',
  templateUrl: './title-effect.component.html',
  styleUrls: ['./title-effect.component.css']
})
export class TitleEffectComponent implements OnInit {

  @Input() text:any;
  @Input() color:any;

  
  constructor() { }
  
  

  ngOnInit(): void {
    
  }

}
