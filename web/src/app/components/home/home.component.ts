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
}

