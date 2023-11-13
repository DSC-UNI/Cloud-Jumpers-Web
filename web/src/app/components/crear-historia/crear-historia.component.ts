import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-historia',
  templateUrl: './crear-historia.component.html',
  styleUrls: ['./crear-historia.component.scss']
})

export class CrearHistoriaComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private http: HttpClient) {

  }
  
  get patient_dni(){
    return this.formPatient.get('patient_dni');
  }
  get patient_date(){
    return this.formPatient.get('patient_date');
  }
  get patient_pathological_history(){
    return this.formPatient.get('patient_pathological_history');
  }
  get patient_surgical_history(){
    return this.formPatient.get('patient_surgical_history');
  }
  get patient_rams(){
    return this.formPatient.get('patient_rams');
  }
  get patient_chronological_relation(){
    return this.formPatient.get('patient_chronological_relation');
  }
  get patient_plan(){
    return this.formPatient.get('patient_plan');
  }

  formPatient = this.fb.group({
    'patient_dni':['',[Validators.required, Validators.min(10000000),Validators.max(99999999)]],
    'patient_date': ['',Validators.required],
    'patient_pathological_history':['', Validators.required],
    'patient_surgical_history':['', Validators.required],
    'patient_rams':['', Validators.required],
    'patient_chronological_relation':['', Validators.required],
    'patient_plan':['', Validators.required],
  });


  ngOnInit(): void {
  }

  formData: any = {};

  async onSubmit() {
    if (this.formPatient.valid) {

      this.formData = {
        patient_dni: this.formPatient.get('dni')?.value,
        patient_date: this.formPatient.get('patient_date')?.value,
        patient_pathological_history: this.formPatient.get('pathological_history')?.value,
        patient_surgical_history: this.formPatient.get('surgical_history')?.value,
        patient_rams: this.formPatient.get('rams')?.value,
        patient_chronological_relation: this.formPatient.get('chronological_relation')?.value,
        patient_plan: this.formPatient.get('plan')?.value,
      }

      console.log(this.formPatient.value);

      // try {
      //   const response = await this.http.post("http://localhost:8000/api/projects/", this.formData).toPromise();
      //   console.log("datos enviados con exito", response);
      // } catch (error) {
      //   console.error("error al enviar los datos", error);
      // }

    }
  }
}
