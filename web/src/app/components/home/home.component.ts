import { Component, OnInit } from '@angular/core';
// Backend API
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  constructor(private http:HttpClient) { }
  obj :any;
  ngOnInit(): void {
  this.obj = this.http.get("http://localhost:8000/api/projects/").subscribe(
    data => this.obj = data
  )
  }
  
}

