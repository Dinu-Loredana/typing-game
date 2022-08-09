import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInputHandler(value: string) {
    this.enteredText = value;
  }
  compareCharacters(generatedLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return enteredLetter === generatedLetter ? 'correct' : 'incorrect';
  }
}
