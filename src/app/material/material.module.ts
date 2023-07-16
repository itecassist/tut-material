import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule { }
