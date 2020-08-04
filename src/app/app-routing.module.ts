import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { MerchComponent } from './pages/merch/merch.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LabelComponent } from './pages/label/label.component';
import { PodcastDetailComponent } from './pages/podcast-detail/podcast-detail.component';

const routes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'app-about', component: AboutComponent },
  { path: 'app-podcast', component: PodcastComponent },
  { path: 'app-podcast-detail/:id', component: PodcastDetailComponent },
  { path: 'app-merch', component: MerchComponent },
  { path: 'app-label', component: LabelComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: '', redirectTo: '/app-home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
