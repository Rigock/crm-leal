import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {

  constructor (
    private fb: FormBuilder
  ) {}

  get name (){
    return this.formClient.get('name') as FormControl;
  }

  get contact (){
    return this.formClient.get('contact') as FormControl;
  }

  get address (){
    return this.formClient.get('address') as FormControl;
  }

  get email (){
    return this.formClient.get('email') as FormControl;
  }

  formClient = this.fb.group({
      'name': ['', Validators.required ],
      'contact': ['', Validators.required ],
      'address': [''],
      'email': ['', [Validators.required, Validators.email]],
  });


  procesar (clientData: any) {
    console.log('Data:: ',clientData)
  }

}
