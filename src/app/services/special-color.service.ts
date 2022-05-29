import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpecialColorService {

  constructor() { }

   specialColor = 'danger';
   specialColorSubject = new Subject<string>();
  
  specialColorObservable = this.specialColorSubject.asObservable();


  getSpecialColor()  {
    return this.specialColor;
  }

  setSpecialColor(color: string) {
    this.specialColor = color;
    this.specialColorSubject.next(this.specialColor);
  }

}
