import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports:[MatInputModule,MatButtonModule,MatCardModule,MatIconModule,ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm:FormGroup;
  constructor(fb:FormBuilder){
    this.signupForm = fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]],
      confirmPassword:['',Validators.required]
    })
  }

  onSignup(){
    if(this.signupForm.valid){
      console.log('form',this.signupForm.value);

    }
  }

  check():boolean{
    const x = this.signupForm.get('confirmPassword')?.value !== this.signupForm.get('password')?.value
    console.log(x);

    return x
  }
}
