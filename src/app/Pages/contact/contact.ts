import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  onSubmit() {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      console.log('Formulário enviado com sucesso:', this.contactForm.value);
      // Aqui você adicionará a lógica para efetivamente mandar o e-mail/mensagem no futuro.

      // Opcional: resetar após enviar
      // this.contactForm.reset();
      // this.isSubmitted = false;
    } else {
      console.log('Formulário inválido, verifique os campos.');
      // O markAllAsTouched ajuda a ativar os estados touched de todos os campos
      this.contactForm.markAllAsTouched();
    }
  }

}
