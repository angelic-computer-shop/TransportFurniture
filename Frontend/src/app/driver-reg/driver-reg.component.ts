import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-reg',
  templateUrl: './driver-reg.component.html',
  styleUrls: ['./driver-reg.component.scss']
})
export class DriverRegComponent implements OnInit{

  form: any = {
    name: null,
    surname:null,
    idno:null,
    trucktype:null,
    licenseno:null,
    cellno:null,
    email: null,
    password: null

     
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
      const { name, surname, idno,trucktype,licenseno,cellno,email,password } = this.form;
  
      this.authService.register(name, surname, idno,trucktype,licenseno,cellno,email,password).subscribe({
        next: data => {
          this.isSuccessful = true;
          setTimeout(()=> {
            this.router.navigate(['/login'])
          }, 3000)
          this.isSignUpFailed = false;
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }
  }
