import { Routes } from '@angular/router';
import { LoginPage } from './page/login-page/login-page';
import { SearchPage } from './page/search-page/search-page';

export const routes: Routes = [
  { path: '', component: SearchPage },
  { path: 'login', component: LoginPage },
];
