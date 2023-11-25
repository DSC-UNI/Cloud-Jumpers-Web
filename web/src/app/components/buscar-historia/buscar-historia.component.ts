import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/com-hist.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-buscar-historia',
  templateUrl: './buscar-historia.component.html',
  styleUrls: ['./buscar-historia.component.scss']
})
export class BuscarHistoriaComponent implements OnInit {

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) { }
  filterDNI = '';
  users = [
    {

      "patient_dni": "12345678",
      "patient_date": "01/01/2023",
      "patient_pathological_history": "Ant. Patológicos 1",
      "patient_plan": "Plan de Tratamiento 1",
      "patient_rams": "Alergias 1",
      "patient_chronological_relation": "Relato Cronológico 1",
      "patient_surgical_history": "Antecedente Quirurjico 1"
    },
    {
      "patient_dni": "87654321",
      "patient_date": "02/01/2023",
      "patient_pathological_history": "Ant. Patológicos 2",
      "patient_plan": "Plan de Tratamiento 2",
      "patient_rams": "Alergias 2",
      "patient_chronological_relation": "Relato Cronológico 2",
      "patient_surgical_history": "Antecedente Quirurjico 2"
    },
    // Agrega más objetos de usuario según sea necesario
    // ...

    {
      "patient_dni": "56789012",
      "patient_date": "08/01/2023",
      "patient_pathological_history": "Ant. Patológicos 3",
      "patient_plan": "Plan de Tratamiento 3",
      "patient_rams": "Alergias 3",
      "patient_chronological_relation": "Relato Cronológico 3",
      "patient_surgical_history": "Antecedente Quirurjico 3"
    },

    {
      "patient_dni": "12256841",
      "patient_date": "08/01/2023",
      "patient_pathological_history": "Ant. Patológicos 4",
      "patient_plan": "Plan de Tratamiento 4",
      "patient_rams": "Alergias 4",
      "patient_chronological_relation": "Relato Cronológico 4",
      "patient_surgical_history": "Antecedente Quirurjico 4"
    }
  ];


  ngOnInit() {
    // Suscribirse al servicio para recibir datos
    this.dataService.userData$.subscribe(userData => {
      if (userData) {
        // Agregar los datos al array de usuarios
        this.users.push(userData);
        console.log("Datos recibidos en BuscarHistoriaComponent:", userData);
    
        // Forzar la actualización de la vista
        this.cdr.detectChanges();
      }
    });
  }
}