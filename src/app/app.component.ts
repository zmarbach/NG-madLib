import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG-madLib';
  
  noun: string = "";
  color: string = "";
  bodyPart: string = "";
  number: number = null;
  isShown: boolean = false;

  show() {
    this.isShown = true;
  }

  reset(){
    this.noun = "",
    this.color =  "",
    this.bodyPart = "";
    this.number = null;
    this.isShown = false;
  }

}
