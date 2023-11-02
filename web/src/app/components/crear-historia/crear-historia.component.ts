import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-historia',
  templateUrl: './crear-historia.component.html',
  styleUrls: ['./crear-historia.component.css']
})

export class CrearHistoriaComponent implements OnInit {
  historiaForm: FormGroup;

  formData: any = {};

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.historiaForm = this.fb.group({
      dni: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$')
      ]),
      created_at: new FormControl(null, Validators.required),
      antecedentes_patologicos: new FormControl(null, Validators.required),
      antecedentes_quirurgicos: new FormControl('', Validators.required),
      rams: new FormControl('', Validators.required),
      relato_cronologico: new FormControl('', Validators.required),
      plan: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.historiaForm.valid) {

      this.formData = {
        dni: this.historiaForm.get('dni')?.value,
        created_at: this.historiaForm.get('created_at')?.value,
        antecedentes_patologicos: this.historiaForm.get('antecedentes_patologicos')?.value,
        antecedentes_quirurgicos: this.historiaForm.get('antecedentes_quirurgicos')?.value,
        rams: this.historiaForm.get('rams')?.value,
        relato_cronologico: this.historiaForm.get('relato_cronologico')?.value,
        plan: this.historiaForm.get('plan')?.value,
      }

      try {
        const response = await this.http.post("http://localhost:8000/api/projects/", this.formData).toPromise();
        console.log("datos enviados con exito", response);
      } catch (error) {
        console.error("error al enviar los datos", error);
      }

    }
  }
}
