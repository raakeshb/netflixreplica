import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;
  similarMovies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadMovie(id);
    });
  }

  loadMovie(id: number): void {
    this.movieService.getMovieById(id).subscribe(movie => {
      this.movie = movie || null;
      if (this.movie) {
        this.loadSimilarMovies();
      }
    });
  }

  loadSimilarMovies(): void {
    this.movieService.getMovieCategories().subscribe(categories => {
      if (this.movie) {
        const allMovies = categories.flatMap(cat => cat.movies);
        this.similarMovies = allMovies
          .filter(m => m.genre === this.movie?.genre && m.id !== this.movie?.id)
          .slice(0, 6);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  playMovie(): void {
    alert('Playing: ' + this.movie?.title);
  }

  addToList(): void {
    alert('Added to My List: ' + this.movie?.title);
  }
}