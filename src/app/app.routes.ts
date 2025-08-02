import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DocumentationComponent } from './documentation/documentation.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: '**', redirectTo: '' }
]; 