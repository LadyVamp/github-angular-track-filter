import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { MatPaginatorModule } from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { TrackComponent } from './track/track.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { FooterComponent } from './footer/footer.component';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {
//   MatInputModule,
//   MatFormFieldModule 
// } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    TrackDetailsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    // MatInputModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
