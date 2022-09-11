import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FillerService } from 'src/app/filler.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public filler: FillerService) {}
  isFormInvalid = false;

  msgForm = new FormGroup({
    from_name: new FormControl('', [
      Validators.required,
      Validators.pattern('/^[A-Za-z]+$/'),
    ]),
    email_id: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '/^[A-Z0-9]+[A-Z0-9_%+-]*(.[A-Z0-9_%+-]{1,})*@(?:[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?.)+[A-Z]{2,24}$/i'
      ),
    ]),
    message: new FormControl('', [Validators.required]),
  });

  submitForm() {
    console.log(this.msgForm.value);
    const params = {
      from_name: this.msgForm.value.from_name,
      email_id: this.msgForm.value.email_id,
      message: this.msgForm.value.message,
    };
    emailjs
      .sendForm(
        'service_vkh4e1r',
        'template_n69v7is',
        this.msgForm.value as HTMLFormElement,
        'G2J0G74cNhcchLd6d'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  ngOnInit(): void {}
}
