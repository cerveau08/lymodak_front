import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        AccueilComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        FormsModule
    ],
})

export class PagesModule {}