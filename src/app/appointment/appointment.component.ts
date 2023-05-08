import { Component, OnInit } from '@angular/core';
import { Appointment, Status } from './appointment';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointment : Appointment = new Appointment();
  status :Status = new Status();

  constructor(private appointmentService : AppointmentService) { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    alert(this.appointment);
    console.log(this.appointment);
    this.appointmentService.bookAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      this.status = data;
    })
  }
}
