import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { WrapperListComponent } from '../../components/wrapper-list/wrapper-list.component';
import { Movie } from '../../models/movie.model';
import { FetchMoviesService } from '../../services/fetchmovies.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MovieCardComponent,
    WrapperListComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [FetchMoviesService]
})
export class HomeComponent implements OnInit {

  movieService = inject(FetchMoviesService);
  movieList: Movie[] = [];
  loading = false;

  ngOnInit() {
    this.loading = true;
    this.movieService.fetchMovies().then(movies => {
      this.movieList = movies.results;
    }).finally(() => {
      this.loading = false;
    });
  }

}
