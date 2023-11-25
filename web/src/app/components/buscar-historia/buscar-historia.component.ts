import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-historia',
  templateUrl: './buscar-historia.component.html',
  styleUrls: ['./buscar-historia.component.scss']
})
export class BuscarHistoriaComponent implements OnInit {

  constructor(){}
  filterDNI = '';
  users = [
    {
      "dni": "12345678",
      "name": "Nombre Usuario 1",
      "date": "01/01/2023",
      "pat_chrono_rel": "Historia Clínica Relacionada 1",
      "pat_plan": "Plan de Tratamiento 1",
      "pat_rams": "Registro de Alergias Medicamentosas 1",
      "pat_path_hist": "Historial de Patología 1"
    },
    {
      "dni": "87654321",
      "name": "Nombre Usuario 2",
      "date": "02/01/2023",
      "pat_chrono_rel": "Historia Clínica Relacionada 2",
      "pat_plan": "Plan de Tratamiento 2",
      "pat_rams": "Registro de Alergias Medicamentosas 2",
      "pat_path_hist": "Historial de Patología 2"
    },
    // Agrega más objetos de usuario según sea necesario
    // ...

    {
      "dni": "56789012",
      "name": "Nombre Usuario 8",
      "date": "08/01/2023",
      "pat_chrono_rel": "Historia Clínica Relacionada 8",
      "pat_plan": "Plan de Tratamiento 8",
      "pat_rams": "Registro de Alergias Medicamentosas 8",
      "pat_path_hist": "Historial de Patología 8"
    },

    {
      "dni": "12256841",
      "name": "Nombre Usuario 8",
      "date": "08/01/2023",
      "pat_chrono_rel": "Historia Clínica Relacionada 8",
      "pat_plan": "Plan de Tratamiento 8",
      "pat_rams": "Registro de Alergias Medicamentosas 8",
      "pat_path_hist": "Historial de Patología 8"
    }
  ];

  ngOnInit() {
    // Lógica de inicialización, si es necesario
  }
}
