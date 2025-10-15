import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  featuredMovie: Movie | null = null;
  isMuted = true;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.movieService.getFeaturedMovie().subscribe(movie => {
      this.featuredMovie = movie;
    });
  }

  playMovie() {
    if (this.featuredMovie) {
      this.router.navigate(['/movie', this.featuredMovie.id]);
    }
  }

  getMoreInfo() {
    if (this.featuredMovie) {
      this.router.navigate(['/movie', this.featuredMovie.id]);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
  }
}