import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-month-view',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './month-view.component.html',
  styleUrl: './month-view.component.css'
})
export class MonthViewComponent {
  selectedDate: Date | null = null;
  @Output() dateSelected = new EventEmitter<Date>();

  onSelect(date: Date) {
    this.selectedDate=date;
    this.dateSelected.emit(date);
  }
}