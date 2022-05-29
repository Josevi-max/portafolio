import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { SpecialColorService } from 'src/app/services/special-color.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private specialColor: SpecialColorService, private http: HttpClient) {
  }


  specialActualColor = this.specialColor.getSpecialColor();
  errorForm = false;
  sendForm = false;

  ngOnInit(): void {
    this.specialColor.specialColorObservable.subscribe(color => {
      this.specialActualColor = color;
    });
  }


  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xwkyangg',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
            this.sendForm = true;
          }
        );
    } else {
      this.errorForm = true;
    }
  }

}
