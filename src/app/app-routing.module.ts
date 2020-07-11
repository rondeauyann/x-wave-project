import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PodcastComponent } from './podcast/podcast.component';
import { MerchComponent } from './merch/merch.component';
import { ContactComponent } from './contact/contact.component';
import { LabelComponent } from './label/label.component';

const routes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'app-about', component: AboutComponent },
  { path: 'app-podcast', component: PodcastComponent },
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
