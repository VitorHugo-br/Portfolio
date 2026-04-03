import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(environment.SERVICE_ID, environment.TEMPLATE_ID, e.target as HTMLFormElement, environment.PUBLIC_KEY)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  }


}
