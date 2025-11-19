import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) {}

    getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

    getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

}
