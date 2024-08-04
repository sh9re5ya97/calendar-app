import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
    }
  }
}
