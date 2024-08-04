import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsService } from '../../shared/utils.service';
import { MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-create-appointment-dialog',
  templateUrl: './create-appointment-dialog.component.html',
  styleUrls: ['./create-appointment-dialog.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatOption,
    MatSelectModule
  ]
})
export class CreateAppointmentDialogComponent implements OnInit {
  appointmentForm: FormGroup;
  timeSlots: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateAppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private utilsService:UtilsService
  ) {
    this.appointmentForm = this.fb.group({
      date: [data.date || new Date(), Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void { 
    this.timeSlots = this.utilsService.generateTimeSlots();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      this.dialogRef.close(this.appointmentForm.value);
    }
  }

  openDatePicker(picker: any): void {
    picker.open();
  }
}