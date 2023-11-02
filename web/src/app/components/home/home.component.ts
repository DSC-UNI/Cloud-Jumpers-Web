import { Component, OnInit } from '@angular/core';
// Backend API
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  
  obj :any;

  formData: any = {};

  constructor(private http:HttpClient) { }

  send_data = {
    "add":"true",
    "obj":{
      "dni": "9999999",
    "antecedentes_patologicos": "dgjsdfgjlsdfjgljdfs",
    "antecedentes_quirurgicos": "wefaefaedgfsfd",
    "rams": "pojgsfopjgsfdpgs",
    "relato_cronologico": "pjoefjadfgjp",
    "plan": "posdjgsdofjpgjpsdf",
    }
  }

  ngOnInit(): void {
    //método para llamar a las historias clínicas
    this.getStories();
  }

  getStories() {
    this.http.get("http://localhost:8000/api/projects/").subscribe(
      (data: any) => {
        this.obj = data;
      }
    );
  }

  postStories() {
    this.http.post("http://localhost:8000/api/projects/", this.formData).subscribe(
      (response: any) => {
        console.log('Proyecto creado con éxito:', response);
        // Puedes realizar acciones adicionales después del POST si es necesario
        this.getStories(); // Actualiza la lista de proyectos después del POST
      },
      (error) => {
        console.error('Error al crear el proyecto:', error);
      }
    );
  }
}

