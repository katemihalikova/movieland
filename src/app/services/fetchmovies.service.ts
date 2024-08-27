import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FetchMoviesService {

  loading = false;

  private apiKey = '873e6334422e12d4227b13e0cb924ef3';
  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${this.apiKey}`
    }
  };

  async fetchMovies() {
    this.loading = true;
    return await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`, this.options).then((res) => {
      if (!res.ok) {
        this.loading = false;
        throw new Error('Error fetching movies');
      } else {
        this.loading = false;
        return res.json();
      }
    }).catch((err) => {
      this.loading = false;
      throw new Error('Error fetching movies');
    }).finally(() => {
      this.loading = false;
    });
  }


}