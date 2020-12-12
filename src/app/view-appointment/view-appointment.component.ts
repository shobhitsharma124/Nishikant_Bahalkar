import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Appointments } from '../appoint.model';
import {SharedService} from '../Shared/shared.service'


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {
  ch:string;
  app:Appointments[] = [];
  app1:Appointments[] = [];
  constructor( private shared:SharedService,private fb:FormBuilder) { }

 

  ngOnInit() {
    this.app= this.shared.fetchData();
    console.log(this.app);
    
  }


  search = this.fb.group({
    value : [""]
  });

  onSearch(){
    console.log(this.search.value)
    if(this.search.value.value=="M"){
      this.app1=this.app.filter(c=>c.pchoice=="Male")
    }
    if(this.search.value.value=="F"){
      this.app1=this.app.filter(c=>c.pchoice=="Female")
    }
    if(this.search.value.value=="N"){
      this.app1=this.app.filter(c=>c.pchoice=="No")
    }
  }
  
  getfitness() {
    
  }
}
