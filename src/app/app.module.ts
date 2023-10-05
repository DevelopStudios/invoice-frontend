import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpAppInterceptor } from 'src/interceptors/http.interceptor';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { GlobalFilterComponent } from './components/global-filter/global-filter.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { GlobalListItemComponent } from './components/global-list-item/global-list-item.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GlobalFilterComponent,
    GlobalListItemComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAppInterceptor,
      multi: true,
    },
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
