import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Appointments } from '../appoint.model';
import {SharedService} from '../Shared/shared.service'


export class Fitness {
  constructor(
    public rupees: number,
    public paise: number,
    public other:string,
    public otheramt:number,
    public sess:string,
    public yeschoice:string,
    public nochoice:string,
    public malechoice:string,
    public femalechoice:string,
    public nomf:string,
    public saddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pin: number,
    public Mobile: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public bfirstname:string,
    public blastname: string,
    public age:number,
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {
  appoint:Appointments;

  @Output () FitnessData = new EventEmitter<Fitness>();
  fitnessForm: FormGroup;
  public ob:any = {};
  constructor(private shared:SharedService,public f:FormBuilder) { }
 
  

  ngOnInit() {
   
    this.fitnessForm=this.f.group({
      firstname:["",[ Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      lastname:["",[ Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      rupees:[""],
      paise:[""] ,
      otheramt:[""],
     sess:["",Validators.required],
     choice:["",Validators.required],
     pchoice:["",Validators.required],
     saddress:["",Validators.required],
     city: ["",Validators.required],
     state: ["",Validators.required],
     country:["",Validators.required] ,
     pin:["",[
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(6),
      Validators.maxLength(6)
    ]] ,
     Mobile:["",Validators.required] ,
     email: ["",[Validators.required, Validators.email]],
     bfirstname:[""],
     blastname:[""] ,
     age: ["",[ Validators.required, Validators.pattern('[0-9]+'), Validators.min(18), Validators.max(60) ]]
    });    
  }

  get m() { return this.fitnessForm.controls; 
    console.log(this.fitnessForm.controls)}


  onSubmit() 
  
  {

    console.log("submitted");
    if(this.fitnessForm.invalid){
      alert("Please enter valid data!")
    }
  
    if(this.fitnessForm.valid)
    {
    this.ob = { ...this.fitnessForm.value, ...this.ob };
    this.appoint=this.fitnessForm.value;
    this.shared.addData(this.appoint);  
    }
  
  }
    
}
