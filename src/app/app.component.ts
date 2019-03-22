import { Component } from '@angular/core';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

session_price:any = 17.00;
overnightSession_price:any = 75.00;
travelTime_price:any = 5.67;
Mileage_price:any = 0.565;
Repeat_Senior_veteren_discount_price:any = 0.50;
first_time_client_discount:any = 0.25;

holidayPremium_price:any = 10.00;
holidayDiscount_price:any = 5.00 
additionalPets_price:any = 5.00;

session: number = 0;
overnightSession: number = 0;
travelTime:number = 0;
milege:number = 0;
holidays:number = 0;
additionalPets = 0;

user_discount:any=0;

// public sessionFee: any = (this.session * this.session_price); 



sessionOp: Options = {
  floor: 0,
  ceil: 250
};

overnightSessionOp: Options = {
  floor: 0,
  ceil: 250
};
travelTimeOp: Options = {
  floor: 0,
  ceil: 250
};

milegeOp: Options = {
  floor: 0,
  ceil: 250
};

holidaysOp: Options = {
  floor: 0,
  ceil: 250
};

AdditionalpetOp: Options = {
  floor: 0,
  ceil: 25
};


constructor(){

}
entrylevelDiscount(property,event){
if(property == 'first'){
  this.user_discount = this.first_time_client_discount
}

if(property == 'repeat'){
  this.user_discount = this.Repeat_Senior_veteren_discount_price
}
if(property == 'senior'){
  this.user_discount = this.Repeat_Senior_veteren_discount_price
}
if(property == 'veteran'){
  this.user_discount = this.Repeat_Senior_veteren_discount_price
}


}


}
