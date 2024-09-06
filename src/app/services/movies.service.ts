import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  http = inject(HttpClient);


  getNowPlayingMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playingx`);
  }

  getUpcomingMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcomingx`);
  }

  getPopularMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popularx`);
  }

}