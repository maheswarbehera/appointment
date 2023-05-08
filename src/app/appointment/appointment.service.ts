import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment, Status } from './appointment';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.api;

  bookAppointment(appointment:Appointment){
    return this.http.post<Status>(this.apiUrl+'/book-appointment.php',appointment);
  }
}
