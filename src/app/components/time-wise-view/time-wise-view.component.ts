import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { UtilsService } from '../../shared/utils.service';

@Component({
  selector: 'app-time-wise-view',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './time-wise-view.component.html',
  styleUrl: './time-wise-view.component.css'
})
export class TimeWiseViewComponent {
  @Input() selectedDate: Date | null = null;
  displayedColumns: string[] = ['time', 'appointment'];
  hours: { time: string, appointment: string }[] = [];
  constructor(private utilService:UtilsService){}
  
  ngOnInit() {
    this.generateHours();
  }

  generateHours() {
    const timeSlots = this.utilService.generateTimeSlots();
    this.hours = timeSlots.map(time => ({ time, appointment: '' }));
  }
}
