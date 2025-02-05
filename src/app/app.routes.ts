import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { BlogControlComponent } from './blog-control/blog-control.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'list-friends', component: ListFriendsComponent },
    { path: 'blog', component: BlogControlComponent },
  ];
