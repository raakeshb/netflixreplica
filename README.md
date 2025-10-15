# Netflix Replica - Angular 14

A fully functional Netflix clone built with Angular 14, featuring a modern UI/UX that closely replicates the Netflix streaming platform.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Netflix-like UI**: Authentic Netflix interface with:
  - Fixed navigation header with scroll effect
  - Hero banner with featured content
  - Horizontal scrolling movie rows
  - Movie cards with hover effects
  - Detailed movie information pages
  - Search functionality
- **Smooth Animations**: CSS transitions and animations for enhanced user experience
- **Component Architecture**: Well-organized Angular components following best practices
- **Routing**: Angular Router for navigation between pages
- **Services**: Centralized movie service for data management

## Tech Stack

- **Framework**: Angular 14
- **Language**: TypeScript 4.7
- **Styling**: CSS3
- **Build Tool**: Angular CLI

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── banner/          # Hero banner
│   │   ├── movie-row/       # Horizontal movie rows
│   │   └── movie-card/      # Individual movie cards
│   ├── pages/
│   │   ├── home/            # Home page
│   │   ├── movie-detail/    # Movie details page
│   │   └── search/          # Search results page
│   ├── services/
│   │   └── movie.service.ts # Movie data service
│   ├── models/
│   │   └── movie.model.ts   # TypeScript interfaces
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   └── app.component.ts
├── assets/
├── environments/
├── index.html
├── main.ts
├── styles.css
└── polyfills.ts
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/raakeshb/netflixreplica.git
   cd netflixreplica
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build the project for production
- `npm test` - Run unit tests
- `npm run watch` - Build and watch for changes

## Features Breakdown

### Home Page
- Featured content banner with play and info buttons
- Multiple movie categories (Trending Now, Netflix Originals, Action & Adventure, Comedy, Horror)
- Horizontal scrolling movie rows
- Responsive footer with links

### Header Component
- Fixed navigation that changes on scroll
- Search functionality with animated search bar
- Netflix logo and navigation menu
- Profile dropdown

### Movie Cards
- Hover effect with scale animation
- Quick action buttons (Play, Add to List, Like)
- Movie information overlay
- Match percentage and metadata

### Movie Detail Page
- Full-screen movie banner
- Detailed movie information
- Play and add to list functionality
- "More Like This" section with similar movies
- Back navigation button

### Search Page
- Search results grid
- Loading spinner
- No results message
- Responsive grid layout

## Customization

### Adding Movies

Edit `src/app/services/movie.service.ts` to add or modify movies:

```typescript
private movies: Movie[] = [
  {
    id: 1,
    title: 'Your Movie Title',
    imageUrl: 'https://your-image-url.com/image.jpg',
    rating: 4.5,
    year: 2024,
    duration: '2h 15m',
    description: 'Your movie description',
    genre: 'Action'
  },
  // Add more movies...
];
```

### Styling

The application uses CSS for styling. Main style files:
- `src/styles.css` - Global styles
- Component-specific CSS files in each component folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Production Build

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

You can deploy this application to:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## Future Enhancements

- [ ] User authentication
- [ ] User profiles
- [ ] My List functionality
- [ ] Video player integration
- [ ] Backend API integration
- [ ] Real-time search suggestions
- [ ] Content filtering and sorting
- [ ] Responsive mobile menu
- [ ] Accessibility improvements

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is for educational purposes only. Netflix and its logo are trademarks of Netflix, Inc.

## Acknowledgments

- Netflix for the design inspiration
- Angular team for the amazing framework
- Community for various resources and tutorials

## Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ using Angular 14