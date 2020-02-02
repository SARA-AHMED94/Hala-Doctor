import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PatientHeaderNotLoginComponent } from './patient-header-not-login/patient-header-not-login.component';
import { SearchResultComponent } from './search-result/search-result.component';



const appRoutes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', component: HomeComponent },
  { path: 'patientHeader', component: PatientHeaderNotLoginComponent },


];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FooterComponent,
    PatientHeaderNotLoginComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    CollapseModule.forRoot(),
    SlickCarouselModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
