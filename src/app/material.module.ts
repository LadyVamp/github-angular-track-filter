
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatTableModule, MatDialogModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
@NgModule({
  imports: [ReactiveFormsModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatTableModule, MatInputModule, MatDialogModule, MatSlideToggleModule, MatRadioModule, MatDatepickerModule, MatDatepickerModule,
    MatNativeDateModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatTableModule, MatInputModule, MatDialogModule, MatExpansionModule, MatSelectModule, MatSlideToggleModule, MatRadioModule, MatDatepickerModule],
  providers: [
    MatDatepickerModule,
  ],
})

export class MaterialModule { }