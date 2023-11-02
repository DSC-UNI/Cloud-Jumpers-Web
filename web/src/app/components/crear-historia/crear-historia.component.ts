import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-historia',
  templateUrl: './crear-historia.component.html',
  styleUrls: ['./crear-historia.component.css']
})

export class CrearHistoriaComponent implements OnInit {
  historiaForm: FormGroup;

  constructor() {
    this.historiaForm = new FormGroup({
      dni: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$')
      ]),
      fecha: new FormControl(null, Validators.required),

      pregunta1: new FormControl(null, Validators.required),
      pregunta2: new FormControl('', Validators.required),
      pregunta3: new FormControl('', Validators.required),
      pregunta4: new FormControl('', Validators.required),
      pregunta5: new FormControl('', Validators.required),
      pregunta6: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.historiaForm.valid) {
      // Envía los datos del formulario
      console.log(this.historiaForm.value);
    } else {
      // Muestra errores o realiza otras acciones
      console.log('Formulario no válido. Por favor, complete todas las preguntas.');
    }
  }
}
