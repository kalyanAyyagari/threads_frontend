import { Routes } from '@angular/router';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';


export const feedRoutes: Routes = [
  {path:'', component:LandingPageComponent,
    children: [
      { path: '', redirectTo: 'feed', pathMatch: 'full' },
      { path: 'feed', component: FeedPageComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },

];
