import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MonthViewComponent } from '../components/month-view/month-view.component';
import { TimeWiseViewComponent } from '../components/time-wise-view/time-wise-view.component';
import { CreateAppointmentDialogComponent } from '../components/create-appointment-dialog/create-appointment-dialog.component';



@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatToolbarModule,MatDialogModule,MatButtonModule, MatListModule,MonthViewComponent, TimeWiseViewComponent,NavBarComponent,CreateAppointmentDialogComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  selectedDate: Date | null = null;
  constructor(public dialog: MatDialog) { }
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateAppointmentDialogComponent, {
      width: '350px',
      data: { date: this.selectedDate || new Date() } // Pass the selected date here
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
  onDateSelected(date: Date): void {
    this.selectedDate = date;
  }
}
