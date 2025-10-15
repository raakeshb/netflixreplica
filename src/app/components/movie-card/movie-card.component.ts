import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  isHovered = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  viewDetails() {
    this.router.navigate(['/movie', this.movie.id]);
  }

  playMovie() {
    this.router.navigate(['/movie', this.movie.id]);
  }
}