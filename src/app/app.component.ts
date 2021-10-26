import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password = '';

  length = 0;

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    this.password = 'myPassword123%';
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    /* if(!isNaN(parsedValue)){
      this.length = parsedValue;

    } */
    }
}