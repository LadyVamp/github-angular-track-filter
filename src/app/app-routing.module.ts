import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackComponent } from './track/track.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { tap, mergeMap, map, catchError, filter } from 'rxjs/operators';


const routes: Routes = [
  { path: 'home', component: TrackComponent, data: { title: 'Треки' } },
  { path: 'detail/:id', component: TrackDetailsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

