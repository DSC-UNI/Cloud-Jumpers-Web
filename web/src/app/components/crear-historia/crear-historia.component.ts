import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/com-hist.service';



@Component({
  selector: 'app-crear-historia',
  templateUrl: './crear-historia.component.html',
  styleUrls: ['./crear-historia.component.scss']
})

export class CrearHistoriaComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService) {

  }

  get patient_dni() {
    return this.formPatient.get('patient_dni');
  }
  get patient_date() {
    return this.formPatient.get('patient_date');
  }
  get patient_pathological_history() {
    return this.formPatient.get('patient_pathological_history');
  }
  get patient_surgical_history() {
    return this.formPatient.get('patient_surgical_history');
  }
  get patient_rams() {
    return this.formPatient.get('patient_rams');
  }
  get patient_chronological_relation() {
    return this.formPatient.get('patient_chronological_relation');
  }
  get patient_plan() {
    return this.formPatient.get('patient_plan');
  }

  formPatient = this.fb.group({
    'patient_dni': ['', [Validators.required, Validators.min(10000000), Validators.max(99999999)]],
    'patient_date': ['', Validators.required],
    'patient_pathological_history': ['', Validators.required],
    'patient_surgical_history': ['', Validators.required],
    'patient_rams': ['', Validators.required],
    'patient_chronological_relation': ['', Validators.required],
    'patient_plan': ['', Validators.required],
  });


  ngOnInit(): void {
  }

  formData: any = {};

  // async
  onSubmit() {
    if (this.formPatient.valid) {

      console.log(this.formPatient.value);
      console.log("Datos enviados desde CrearHistoriaComponent:", this.formPatient.value);

      // Enviar datos al servicio
      this.dataService.setUserData(this.formPatient.value);

      // try {
      //   const response = await this.http.post("http://localhost:8000/api/projects/", this.formData).toPromise();
      //   console.log("datos enviados con exito", response);
      // } catch (error) {
      //   console.error("error al enviar los datos", error);
      // }

    }
  }
}
