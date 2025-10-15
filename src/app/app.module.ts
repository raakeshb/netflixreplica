import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { MovieRowComponent } from './components/movie-row/movie-row.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MovieRowComponent,
    MovieCardComponent,
    HomeComponent,
    MovieDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }