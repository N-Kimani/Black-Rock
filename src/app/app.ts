import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,  FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'black-rock';
  firstName = '';
  lastName = '';

  printNathan() {
    alert("Hey I am Nathan.");
    window.open("https://www.thoughtco.com/black-minerals-examples-1440937")
  }
  displayNames() {
    const fullName = this.firstName + " " + this.lastName
    const fullName2 = `${this.firstName}${this.lastName}`
    alert(fullName2);
  }
}
