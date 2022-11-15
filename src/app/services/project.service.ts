import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../components/Interface/Project';


@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private apiUrl: string = 'https://portfolio-backend-vhe7.onrender.com/projects';

  constructor( private http: HttpClient ) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl)
  }  
}
