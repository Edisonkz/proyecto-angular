import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// 1. Implementa el FormGroup con los 5 campos y sus validaciones en ContactoComponent.
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  // Formulario reactivo con validaciones
  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.pattern(/^9\d{8}$/)]),
    asunto: new FormControl('', [Validators.required]),
    mensaje: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]),
  });

  enviado = false;

  // 5. Implementa el método enviar() que verifique form.valid. Si es válido, imprime form.value en consola, muestra un mensaje de confirmación en el template con @if y llama a form.reset().
  enviar() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.enviado = true;
      this.form.reset();
      setTimeout(() => this.enviado = false, 3000);
    }
  }

  // Getters para facilitar el acceso en el template
  get nombre() { return this.form.get('nombre'); }
  get correo() { return this.form.get('correo'); }
  get telefono() { return this.form.get('telefono'); }
  get asunto() { return this.form.get('asunto'); }
  get mensaje() { return this.form.get('mensaje'); }
}
