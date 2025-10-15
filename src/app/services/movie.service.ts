import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie, MovieCategory } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    // Trending Now
    { id: 1, title: 'Stranger Things', imageUrl: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVxuRe18l2b3KKSOoh5MvL2IkfkHu_B2GGx8MNKJDqCXNN6cR8TKgbCGfOoih8N0wMJzddSHX17s2xCmXB8j4b5rHd2E5grFT-K5sTz1s6xnRMa6KAjPKv5TLPzR.webp?r=4e7', rating: 4.8, year: 2022, duration: '4 Seasons', description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.', genre: 'Sci-Fi' },
    { id: 2, title: 'The Witcher', imageUrl: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZfSzW8DHPIqwMcAkqod3AYZ5UTKWLc4wqn3cSGQpMlqoT_E4F6_5H7PqxRhK4_tKvPBPVxFrPAqKqzqKhYqjmCM1C4rkx0rVdlEPOCh4Z9FPSuQh1-0chXAUvRY.webp?r=e6e', rating: 4.5, year: 2021, duration: '3 Seasons', description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.', genre: 'Fantasy' },
    { id: 3, title: 'Wednesday', imageUrl: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUp2gZJWx04MMJZwPOT8RVxN6P0XmSlBqqwTxAx5q2mAKRJxP-4uHqKVz7nfVDypPh_r0yDLxT0h8E6h6nXxkFJXLqM6R0Lv8hHpDlLBjSptshpJaTBGKFW-THJ1.webp?r=f1e', rating: 4.7, year: 2022, duration: '1 Season', description: 'Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends at Nevermore Academy.', genre: 'Comedy' },
    { id: 4, title: 'Money Heist', imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500', rating: 4.6, year: 2021, duration: '5 Seasons', description: 'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.', genre: 'Thriller' },
    { id: 5, title: 'The Crown', imageUrl: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=500', rating: 4.8, year: 2022, duration: '6 Seasons', description: 'This drama follows the political rivalries and romance of Queen Elizabeth IIs reign and the events that shaped the second half of the 20th century.', genre: 'Drama' },
    { id: 6, title: 'Breaking Bad', imageUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500', rating: 4.9, year: 2013, duration: '5 Seasons', description: 'A high school chemistry teacher diagnosed with terminal cancer teams up with a former student to manufacture and sell crystal meth.', genre: 'Crime' },

    // Netflix Originals
    { id: 7, title: 'Squid Game', imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500', rating: 4.7, year: 2021, duration: '1 Season', description: 'Hundreds of cash-strapped contestants accept an invitation to compete in childrens games for a tempting prize, but the stakes are deadly.', genre: 'Thriller' },
    { id: 8, title: 'Dark', imageUrl: 'https://images.unsplash.com/photo-1574267432644-f410f8ec53b0?w=500', rating: 4.8, year: 2020, duration: '3 Seasons', description: 'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.', genre: 'Mystery' },
    { id: 9, title: 'Ozark', imageUrl: 'https://images.unsplash.com/photo-1574267432644-f410f8ec53b1?w=500', rating: 4.6, year: 2022, duration: '4 Seasons', description: 'A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.', genre: 'Crime' },
    { id: 10, title: 'Narcos', imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500', rating: 4.7, year: 2017, duration: '3 Seasons', description: 'The true story of Colombias infamously violent and powerful drug cartels fuels this gritty gangster drama series.', genre: 'Crime' },
    { id: 11, title: 'Bridgerton', imageUrl: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=500', rating: 4.5, year: 2022, duration: '2 Seasons', description: 'The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.', genre: 'Romance' },
    { id: 12, title: 'Peaky Blinders', imageUrl: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=500', rating: 4.8, year: 2022, duration: '6 Seasons', description: 'A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.', genre: 'Crime' },

    // Action & Adventure
    { id: 13, title: 'Extraction', imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500', rating: 4.4, year: 2020, duration: '1h 56m', description: 'A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord.', genre: 'Action' },
    { id: 14, title: 'The Gray Man', imageUrl: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500', rating: 4.3, year: 2022, duration: '2h 2m', description: 'When a shadowy CIA agent uncovers damning agency secrets, hes hunted across the globe by a sociopathic rogue operative whos put a bounty on his head.', genre: 'Action' },
    { id: 15, title: 'Red Notice', imageUrl: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=500', rating: 4.2, year: 2021, duration: '1h 58m', description: 'An FBI profiler pursuing the worlds most wanted art thief becomes his reluctant partner in crime to catch an elusive crook whos always one step ahead.', genre: 'Action' },
    { id: 16, title: 'The Old Guard', imageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500', rating: 4.5, year: 2020, duration: '2h 5m', description: 'Led by a warrior named Andy, a covert group of tight-knit mercenaries with a mysterious inability to die have fought to protect the mortal world for centuries.', genre: 'Action' },
    { id: 17, title: '6 Underground', imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500', rating: 4.1, year: 2019, duration: '2h 8m', description: 'After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.', genre: 'Action' },
    { id: 18, title: 'Army of the Dead', imageUrl: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=500', rating: 4.3, year: 2021, duration: '2h 28m', description: 'Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever attempted.', genre: 'Action' },

    // Comedy
    { id: 19, title: 'The Good Place', imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500', rating: 4.6, year: 2020, duration: '4 Seasons', description: 'Due to an error, self-absorbed Eleanor Shellstrop arrives at the Good Place after her death. Determined to stay, she tries to become a better person.', genre: 'Comedy' },
    { id: 20, title: 'Brooklyn Nine-Nine', imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=500', rating: 4.7, year: 2021, duration: '8 Seasons', description: 'Ray Holt, an eccentric commanding officer, and his diverse and lovable team navigate the departments and each others quirks.', genre: 'Comedy' },
    { id: 21, title: 'Never Have I Ever', imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500', rating: 4.4, year: 2023, duration: '4 Seasons', description: 'The coming-of-age story of a first-generation Indian American teen who navigates the ups and downs of high school life.', genre: 'Comedy' },
    { id: 22, title: 'Grace and Frankie', imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500', rating: 4.5, year: 2022, duration: '7 Seasons', description: 'Finding out that their husbands are not just work partners, but have also been romantically involved for the last twenty years, two women with an already strained relationship try to cope.', genre: 'Comedy' },
    { id: 23, title: 'Emily in Paris', imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500', rating: 4.2, year: 2022, duration: '3 Seasons', description: 'A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things.', genre: 'Comedy' },
    { id: 24, title: 'Russian Doll', imageUrl: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500', rating: 4.6, year: 2022, duration: '2 Seasons', description: 'A cynical young woman in New York City keeps dying and returning to the party thats being thrown in her honor on that same evening.', genre: 'Comedy' },

    // Horror
    { id: 25, title: 'The Haunting of Hill House', imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500', rating: 4.8, year: 2018, duration: '1 Season', description: 'Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.', genre: 'Horror' },
    { id: 26, title: 'Midnight Mass', imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=500', rating: 4.7, year: 2021, duration: '1 Season', description: 'An isolated island community experiences miraculous events and frightening omens after the arrival of a charismatic, mysterious young priest.', genre: 'Horror' },
    { id: 27, title: 'Archive 81', imageUrl: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=500', rating: 4.4, year: 2022, duration: '1 Season', description: 'An archivist takes a job restoring damaged videotapes and gets pulled into the mystery of a missing director and a demonic cult.', genre: 'Horror' },
    { id: 28, title: 'The Watcher', imageUrl: 'https://images.unsplash.com/photo-1603418405460-f39c6a19ae38?w=500', rating: 4.3, year: 2022, duration: '1 Season', description: 'A family moves into their dream home, only to be plagued by ominous letters, strange neighbors and sinister threats.', genre: 'Horror' },
    { id: 29, title: 'Locke & Key', imageUrl: 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=500', rating: 4.5, year: 2022, duration: '3 Seasons', description: 'After their fathers murder, three siblings move into a house filled with reality-bending keys; from the comics by Joe Hill and Gabriel Rodriguez.', genre: 'Horror' },
    { id: 30, title: 'Resident Evil', imageUrl: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=500', rating: 4.0, year: 2022, duration: '1 Season', description: 'Years after a viral outbreak caused a global apocalypse, Jade Wesker vows to bring down those responsible while fighting to survive against the Infected.', genre: 'Horror' }
  ];

  private categories: MovieCategory[] = [
    { name: 'Trending Now', movies: this.movies.slice(0, 6) },
    { name: 'Netflix Originals', movies: this.movies.slice(6, 12) },
    { name: 'Action & Adventure', movies: this.movies.slice(12, 18) },
    { name: 'Comedy', movies: this.movies.slice(18, 24) },
    { name: 'Horror', movies: this.movies.slice(24, 30) }
  ];

  constructor() { }

  getMovieCategories(): Observable<MovieCategory[]> {
    return of(this.categories);
  }

  getMovieById(id: number): Observable<Movie | undefined> {
    return of(this.movies.find(m => m.id === id));
  }

  searchMovies(query: string): Observable<Movie[]> {
    const lowerQuery = query.toLowerCase();
    return of(
      this.movies.filter(movie => 
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.description.toLowerCase().includes(lowerQuery) ||
        movie.genre.toLowerCase().includes(lowerQuery)
      )
    );
  }

  getFeaturedMovie(): Observable<Movie> {
    return of(this.movies[0]);
  }
}