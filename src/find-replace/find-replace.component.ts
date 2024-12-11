import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-find-replace',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule
  ],
  templateUrl: './find-replace.component.html',
  styleUrl: './find-replace.component.scss'
})
export class FindReplaceComponent {
  text: string = '';
  findText: string = '';
  replaceText: string = ''; 
  newText: string = ''; 
  caseSensitive: boolean = false;

  findAndReplace(): void {
    if (!this.findText) {
      alert('Please enter text to find.');
      return;
    }

    try {
      const flags = this.caseSensitive ? 'g' : 'gi';
      const regex =  new RegExp(this.escapeRegex(this.findText), flags);

      this.newText = this.text.replace(regex, this.replaceText);
    } catch (error) {
      alert('Invalid regex pattern. Please check your input.');
    }
  }

  clearText(): void {
    this.text = '';
    this.findText = '';
    this.replaceText = '';
    this.newText = '';
  }

  escapeRegex(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
