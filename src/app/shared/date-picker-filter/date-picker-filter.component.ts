import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-date-picker-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule    
  ],
  templateUrl: './date-picker-filter.component.html',
  styleUrl: './date-picker-filter.component.scss'
})
export class DatePickerFilterComponent implements OnInit {
  maxDate: Date = new Date(1998, 11, 31); // December 31, 1998
  minDate: Date = new Date(1990, 0, 1); // January 1, 1990
  datePickerForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
      this.datePickerForm = this.fb.group({
      beginningDate:['', Validators.required],
      endingDate:['', Validators.required]
      })
  }
}
