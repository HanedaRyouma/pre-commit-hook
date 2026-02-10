import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],

  templateUrl: './app.html',

  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('pre-commit-hook');
  protected readonly message = signal('');

  protected showHelloWorld(): void {
    this.message.set('HelloWorld');
  }
}
