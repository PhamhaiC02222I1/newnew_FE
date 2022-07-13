import {Component, Input, OnInit} from '@angular/core';
import {SignUpForm} from '../../model/SignUpForm';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() isCheck: boolean;
  status = 'please fill in the form to register';
  form: any = {};
  hide = true;
  signUpForm: SignUpForm;
  // isCheckSuccess = false;
  checkRegister=false;
  error1: any = {
    message: 'no_user'
  };
  error2: any = {
    message: 'no_email'
  };
  success: any = {
    message: 'Create User Account Success!'
  };
  emailFormControl = new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  constructor( private authService: AuthService,
               private router: Router) { }

  ngOnInit(): void {
    if ( this.authService.getData()){
  this.checkRegister=true;
    }

  }
  ngSubmit(){
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );
    this.authService.signUp(this.signUpForm).subscribe(data =>{
      if (JSON.stringify(data) === JSON.stringify(this.error1)){
        this.status = 'the username is existed';
      }
      if (JSON.stringify(data) === JSON.stringify(this.error2)){
        this.status = 'the email is existed';
      }
      if (JSON.stringify(data) === JSON.stringify(this.success)){
        this.status = 'Success';
        this.authService.setData(true);
        this.router.navigate(['login'])
        // this.isCheckSuccess = true;
      }
    });
  }

}
