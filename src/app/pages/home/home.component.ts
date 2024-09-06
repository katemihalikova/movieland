import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { WrapperListComponent } from '../../components/wrapper-list/wrapper-list.component';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MovieCardComponent,
    WrapperListComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [MoviesService]
})
export class HomeComponent implements OnInit {

  movieService = inject(MoviesService);
  nowPlayingMovies$: Observable<Movie[]> = new Observable();
  upcomingMovies$: Observable<Movie[]> = new Observable();
  popularMovies$: Observable<Movie[]> = new Observable();
  loadingNowPlaying: boolean = false;
  loadingUpcoming: boolean = false;
  loadingPopular: boolean = false;
  errorNowPlaying: boolean = false;
  errorUpcoming: boolean = false;
  errorPopular: boolean = false;
  placeholderCards: number[] = Array(8);

  ngOnInit() {
    this.loadingNowPlaying = true;
    this.loadingUpcoming = true;
    this.loadingPopular = true;

    this.nowPlayingMovies$ = this.movieService.getNowPlayingMovies().pipe(
      map(response => response.results),
      tap(() => this.loadingNowPlaying = false),
      catchError(() => {
        this.loadingNowPlaying = false;
        this.errorNowPlaying = true;
        alert('Error loading now playing movies');
        return of([]);
      })
    );
    this.upcomingMovies$ = this.movieService.getUpcomingMovies().pipe(
      map(response => response.results),
      tap(() => this.loadingUpcoming = false),
      catchError(() => {
        this.loadingUpcoming = false;
        this.errorUpcoming = true;
        alert('Error loading upcoming movies');
        return of([]);
      })
    );
    this.popularMovies$ = this.movieService.getPopularMovies().pipe(
      map(response => response.results),
      tap(() => this.loadingPopular = false),
      catchError(() => {
        this.loadingPopular = false;
        this.errorPopular = true;
        alert('Error loading popular movies');
        return of([]);
      })
    );
  }

}
