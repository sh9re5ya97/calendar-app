import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface Appointment {
  title: string;
  date: Date;
}
@Component({
  selector: 'app-view-appointments',
  standalone: true,
  imports: [DragDropModule, MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './view-appointments.component.html',
  styleUrl: './view-appointments.component.css'
})
export class ViewAppointmentsComponent {
  appointments: Appointment[] = [];

  constructor() {
    this.appointments = [
      { title: 'Meeting', date: new Date() }
    ];
  }

  deleteAppointment(appointment: Appointment) {
    this.appointments = this.appointments.filter(a => a !== appointment);
  }

  drop(event: CdkDragDrop<Appointment[]>) {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }
}
