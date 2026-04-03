import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from 'ngx-signal-toast';
import { EmailService } from '../../Services/email-sender/email-service';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  private emailService = inject(EmailService);

  private toastService = inject(ToastService)

  contactForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!control && control.invalid && (control.dirty || control.touched || this.isSubmitted);
  }

  onSubmit(e: Event) {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      this.emailService.sendEmail(e);
      this.toastService.success('Formulário enviado com sucesso!', {
        title: "Contato",
      });
    } else {
      console.log('Formulário inválido, verifique os campos.');
      this.contactForm.markAllAsTouched();
    }
  }

}
