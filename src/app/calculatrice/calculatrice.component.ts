import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {
 result :string ='';
  getAction(item : any){
    this.result +=item;
    console.log(item);
  }
  equal(){
    this.result = eval(this.result).toFixed(1);

  }
  rest(){
    this.result =' ';
   
  }
}
