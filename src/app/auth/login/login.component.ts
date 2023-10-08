import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor( 
    private _fb:FormBuilder,
    // private _authService: AuthService,
    private _router:Router
   ){}


  public myForm: FormGroup = this._fb.group({
    email: [ '', [ Validators.email,Validators.required ] ],
    password: [ '', [ Validators.required,Validators.minLength(6) ] ],
  })


  public login(){
    console.log(this.myForm.value)
    this._router.navigateByUrl('/pages')
  }

  fieldIsInvalidReactive(field:string): boolean{ //! BOOLEANO
    return ( this.myForm.controls[field].errors && this.myForm.controls[field].touched ) || false;
  }

  fieldErrors(field:string){
    console.log( this.myForm.controls[field].errors);
    return this.myForm.controls[field].errors;
  }
}
