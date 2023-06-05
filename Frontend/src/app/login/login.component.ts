import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
//import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  form: any = {
    username: null,
    password: null
  };

  //username: string
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  //user : string

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
     ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      //this.user = this.storageService.getUser().username
      setTimeout(() => {
        this.router.navigate(['/home'])
      }, 3000)

    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //this.user = this.storageService.getUser().username;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  // userName: string;
  //  password: string;
  //  formData: FormGroup;

  

  //  ngOnInits(){
  //     this.formData = new this.form({
  //        userName: new FormControl("admin"),
  //        password: new FormControl("administration"),
     // });
  // }

}


