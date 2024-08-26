import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { WrapperListComponent } from '../../components/wrapper-list/wrapper-list.component';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MovieCardComponent,
    WrapperListComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  movieList: Movie[] = [
    {
      id: 1,
      title: 'Movie 1',
      poster: 'https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
      popularity: 6334.004,
    },
    {
      id: 2,
      title: 'Movie 2',
      poster: 'https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
      popularity: 6334.004,
    },
    {
      id: 3,
      title: 'Movie 3',
      poster: 'https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
      popularity: 6334.004,
    },
    {
      id: 4,
      title: 'Movie 4',
      poster: 'https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
      popularity: 6334.004,
    },
    {
      id: 5,
      title: 'Movie 5',
      poster: 'https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
      popularity: 6334.004,
    }
  ]

  ngOnInit() {}

}
