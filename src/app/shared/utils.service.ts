import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {}

  generateTimeSlots(): string[] {
    const times: string[] = [];
    for (let i = 0; i < 24; i++) {
      const hour = i < 10 ? `0${i}` : i;
      times.push(`${hour}:00`, `${hour}:30`);
    }
    return times;
  }
}