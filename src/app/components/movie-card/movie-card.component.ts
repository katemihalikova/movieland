import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  @Input() movie!: Movie;

  baseImgUrl: string = 'https://image.tmdb.org/t/p/w500';
  posterUrl: string = '';
  backdropUrl: string = '';

  ngOnInit() {
    this.posterUrl = `${this.baseImgUrl}${this.movie.poster_path}`;
    this.backdropUrl = `${this.baseImgUrl}${this.movie.backdrop_path}`;
  }

}
