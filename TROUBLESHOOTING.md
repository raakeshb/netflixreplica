# Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: "Can't bind to 'movie' since it isn't a known property"

**Error Message:**
```
Error: src/app/pages/search/search.component.html:13:61 - error NG8002: Can't bind to 'movie' since it isn't a known property of 'app-movie-card'.
```

**Solutions:**

#### Solution 1: Clear Angular Build Cache
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Delete Angular cache
rm -rf .angular

# Reinstall dependencies
npm install

# Restart the server
npm start
```

#### Solution 2: Verify Module Imports
Make sure `src/app/app.module.ts` has all necessary imports:

```typescript
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  // ...
})
```

#### Solution 3: Verify Component Declaration
Ensure `MovieCardComponent` is properly declared in `app.module.ts`:

```typescript
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    // ...
    MovieCardComponent,
    // ...
  ],
})
```

#### Solution 4: Check @Input() Decorator
Verify `src/app/components/movie-card/movie-card.component.ts` has the @Input decorator:

```typescript
import { Component, Input, OnInit } from '@angular/core';

export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;  // This line is crucial
  // ...
}
```

---

### Issue 2: Module Not Found Errors

**Error Message:**
```
Error: Module not found: Error: Can't resolve '@angular/...'
```

**Solution:**
```bash
npm install --legacy-peer-deps
```

---

### Issue 3: Port Already in Use

**Error Message:**
```
Port 4200 is already in use
```

**Solution:**
```bash
# Kill the process on port 4200
npx kill-port 4200

# Or use a different port
ng serve --port 4201
```

---

### Issue 4: TypeScript Compilation Errors

**Solution:**
```bash
# Clear TypeScript cache
rm -rf node_modules/.cache

# Rebuild
npm start
```

---

### Issue 5: Images Not Loading

**Symptom:** Movie posters don't show up

**Solution:**
The project uses Unsplash placeholder images. If they don't load:
1. Check your internet connection
2. Images might be blocked by ad-blockers
3. Consider replacing URLs in `movie.service.ts` with local images

---

## Quick Reset Guide

If all else fails, here's a complete reset:

```bash
# 1. Stop the server (Ctrl+C)

# 2. Clean everything
rm -rf node_modules
rm -rf .angular
rm package-lock.json

# 3. Reinstall
npm install

# 4. Clear browser cache
# In Chrome: Ctrl+Shift+Delete or Cmd+Shift+Delete

# 5. Restart server
npm start

# 6. Open in incognito/private window
# http://localhost:4200
```

---

## Verification Checklist

Before running the app, verify:

- [ ] Node.js version: 14.x or higher
- [ ] npm version: 6.x or higher
- [ ] Angular CLI installed globally: `npm install -g @angular/cli@14`
- [ ] All dependencies installed: `npm install`
- [ ] No TypeScript errors: `ng build --configuration development`

---

## Getting Help

If you still encounter issues:

1. Check the error message carefully
2. Look at the file and line number mentioned
3. Verify the component/module structure
4. Check for typos in imports
5. Ensure all files are saved
6. Restart VS Code/your editor
7. Restart the terminal

---

## Known Limitations

1. **Images**: Using external Unsplash URLs which may have rate limits
2. **Data**: Mock data only - no backend integration
3. **Videos**: No actual video playback (alerts on play button)
4. **Authentication**: No user authentication system

---

## Performance Tips

1. **Development Mode**: Use `npm start` for development
2. **Production Build**: Use `npm run build` for production
3. **Clear Cache**: Clear Angular cache regularly during development
4. **Browser**: Use Chrome DevTools for debugging

---

## Additional Commands

```bash
# Run tests
npm test

# Build for production
npm run build

# Lint the code
ng lint

# Check bundle size
npm run build -- --stats-json
npx webpack-bundle-analyzer dist/netflix-replica/stats.json
```

---

## Need More Help?

1. Check Angular documentation: https://angular.io/docs
2. Check the project's GitHub issues
3. Ensure all files are properly committed and pulled from the repository

---

**Last Updated:** October 2025