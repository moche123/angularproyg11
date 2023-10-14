import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public messages:string[] = [];

  constructor( 
    private _fb:FormBuilder,
    private _authService: AuthService,
    private _router:Router
   ){}


   public myForm:FormGroup = this._fb.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]]
  });


  register() {
    const { name, email, password } = this.myForm.value;

    this._authService.register(name, email, password, 1)
      .subscribe(result => {
        if (result === true) {
          Swal.fire({
            title: 'Enhorabuena!',
            text: 'Usuario creado correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

          this._router.navigateByUrl('/pages')
        } else {

          //TODO: mostrar message de error
          //valida los errores (validaciones) desde la base de datos

          if (result.msg) {
            setTimeout(() => {
              this.messages.push(result.msg);
            }, 300);

            setTimeout(() => {
              this.messages = [];
            }, 3100)
          }

          if (result.errors?.name) {
            setTimeout(() => {
              this.messages.push(result.errors.name.msg);
            }, 300);

            setTimeout(() => {
              this.messages = [];
            }, 3100)
          }
          if (result.errors?.email) {
            setTimeout(() => {
              this.messages.push(result.errors.email.msg);
            }, 300);

            setTimeout(() => {
              this.messages = [];
            }, 3100)
          }

          if (result.errors?.password) {
            setTimeout(() => {
              this.messages.push(result.errors.password.msg);
            }, 300);

            setTimeout(() => {
              this.messages = [];
            }, 3100)
          }

        }
      })



  }

  fieldIsInvalidReactive(field:string): boolean{ //! BOOLEANO
    return ( this.myForm.controls[field].errors && this.myForm.controls[field].touched ) || false;
  }

  fieldErrors(field:string){
    console.log( this.myForm.controls[field].errors);
    return this.myForm.controls[field].errors;
  }

}
