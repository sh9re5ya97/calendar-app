import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';


export const routes: Routes = [{ path: '', redirectTo: '/calendar', pathMatch: 'full' },
    { path: 'calendar', component: CalendarComponent}];
