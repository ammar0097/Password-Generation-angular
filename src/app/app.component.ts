import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password: string = '';
  length = 0;

  onChangeLength(event) {
    const parsedValue = parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
    console.log('letters : ' + this.includeLetters);
  }

  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log('numbers : ' + this.includeNumbers);
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
    console.log('symbols : ' + this.includeSymbols);
  }

  onButtonClick() {
    console.log(`about the generation of password with the following : 
    length : ${this.length}
    include letters : ${this.includeLetters}
    include numbers :  ${this.includeNumbers}
    include symbols : ${this.includeSymbols}
    `);

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = "!#$%&'()*+,-./:;<=>?@[\\]^_`|~{}";
    let validChars = '';
    let generatedPassword = '';
    if (this.includeLetters) {
      validChars = validChars + letters;
    }
    if (this.includeNumbers) {
      validChars = validChars + numbers;
    }
    if (this.includeSymbols) {
      validChars = validChars + symbols;
    }
    for(let i =0;i < this.length;i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index]; 
    }
    this.password = generatedPassword;
  }
}
