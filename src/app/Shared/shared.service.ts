import { Injectable } from '@angular/core';
import { Appointments } from '../appoint.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  appointments:Appointments[] =[];
  constructor() { }

  
  addData(appointment:Appointments){
    this.appointments.push(appointment);
  }

  fetchData(){
    return this.appointments;
  }
}
