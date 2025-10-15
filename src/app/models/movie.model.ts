export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  year: number;
  duration: string;
  description: string;
  genre: string;
  trailerUrl?: string;
}

export interface MovieCategory {
  name: string;
  movies: Movie[];
}