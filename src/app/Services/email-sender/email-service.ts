import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  public async sendEmail(e: Event, nome: string, email: string, mensagem: string) {
    e.preventDefault();

    var templateParams = {
      remetente: nome,
      emailremetente: email,
      msg: mensagem
    }

    try {
      const response = await emailjs.send(environment.SERVICE_ID, environment.TEMPLATE_ID, templateParams, environment.PUBLIC_KEY);

      console.log('Email enviado com sucesso:', response);
      return response;
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      throw error;
    }
  }

}
