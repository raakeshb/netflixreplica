import { Component, Input, OnInit } from '@angular/core';
import { MovieCategory } from '../../models/movie.model';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {
  @Input() category!: MovieCategory;
  scrollPosition = 0;

  constructor() { }

  ngOnInit(): void {
  }

  scrollLeft() {
    const container = document.getElementById('row-' + this.category.name.replace(/\s+/g, '-'));
    if (container) {
      this.scrollPosition = Math.max(0, this.scrollPosition - 600);
      container.scrollTo({
        left: this.scrollPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollRight() {
    const container = document.getElementById('row-' + this.category.name.replace(/\s+/g, '-'));
    if (container) {
      this.scrollPosition = Math.min(container.scrollWidth - container.clientWidth, this.scrollPosition + 600);
      container.scrollTo({
        left: this.scrollPosition,
        behavior: 'smooth'
      });
    }
  }

  getRowId(): string {
    return 'row-' + this.category.name.replace(/\s+/g, '-');
  }
}