import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    FormGroup,
    ReactiveFormsModule
  ]
})
export class ApplicationModule { }
