import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FindReplaceComponent } from '../find-replace/find-replace.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FindReplaceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'find-replace-tool';
}
