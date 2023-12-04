import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent implements OnInit {

  @Input() modalEditData? : any;

  @Output() clientSetted = new EventEmitter<any>();

  constructor (
    private fb: FormBuilder,
    private _crudService: CrudService,
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
      'contact': ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(10),]],
      'address': [''],
      'email': ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void {
    if (this.modalEditData) {
      this.setForm(this.modalEditData);
    }
  }

  createClient ( clientData: any ) { 
    this._crudService.createClient(clientData)
    .then( resp => {
      this.clientSetted.emit(clientData);
      this.formClient.reset();
      this.formClient.get('name')?.setErrors(null);
      this.formClient.get('contact')?.setErrors(null);
      this.formClient.get('address')?.setErrors(null);
      this.formClient.get('email')?.setErrors(null);
    })
  }

  setForm( _data? : any ) {
    this.formClient.patchValue({
      name: _data.name,
      contact: _data.contact,
      address: _data.address,
      email: _data.email
    })
  }

  editClient( _editClient: any ) {
    this._crudService.updateClient(_editClient, this.modalEditData._id)
    .then( resp => {
      this.clientSetted.emit(_editClient);
    })
  }

}
