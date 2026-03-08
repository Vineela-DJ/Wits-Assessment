import { Component, signal } from '@angular/core';
import { UserameChecker } from "./userame-checker/userame-checker";

@Component({
  selector: 'app-root',
  imports: [UserameChecker],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Wits-Assessment');
}
