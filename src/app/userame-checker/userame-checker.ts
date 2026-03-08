import { Component, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsernameValidator } from '../username-validator';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userame-checker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './userame-checker.html',
  styleUrl: './userame-checker.scss',
})
export class UserameChecker {

  status = signal<'idle' | 'checking' | 'available' | 'taken' | 'error'>('idle');

  form;

  constructor(
    private fb: FormBuilder,
    private userService: User
  ) {


    // Initialize the form after userService is available
    this.form = this.fb.group({
      username: ['', {
        validators: [Validators.required],
        asyncValidators: [UsernameValidator(this.userService)],
        updateOn: 'change'
      }]
    });
    const usernameControl = this.form.get('username');

    usernameControl?.statusChanges.subscribe(status => {

      if (status === 'PENDING') {
        this.status.set('checking');
      }

      if (status === 'VALID') {
        this.status.set('available');
      }

      if (status === 'INVALID') {

        const errors = usernameControl.errors;

        if (errors?.['usernameTaken']) {
          this.status.set('taken');
        }
        else if (errors?.['serverError']) {
          this.status.set('error');
        }

      }

    });

  }

}