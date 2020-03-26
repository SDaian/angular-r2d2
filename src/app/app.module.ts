import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './services/loader/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { MatChipsModule } from '@angular/material/chips';
import { CharactersDetailsComponent } from './components/characters-details/characters-details.component';
import { MatButtonModule } from '@angular/material/button';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPipe } from './utils/custom-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    LoaderComponent,
    CharactersDetailsComponent,
    CharactersListComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatButtonModule,
    NgxPaginationModule,
    MatSelectModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
