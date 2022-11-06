import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contacto } from 'src/app/models/Contacto';
import { ContactosService } from 'src/app/services/contactos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  form: FormGroup
  showSpinner: boolean = false;
  constructor(
    private contactService: ContactosService
  ) {
    this.form = new FormGroup({
      tipoDoc: new FormControl('DNI', Validators.required),
      nroDoc: new FormControl(null, Validators.required),
      razonSocial: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      asunto: new FormControl(null, Validators.required),
      comentario: new FormControl(null, Validators.required),
      isCopy: new FormControl(false)
    });
   }

  ngOnInit(): void {
  }

  reset(){
    this.form.reset();
  }

  send(){
    let data:Contacto = this.form.value;
    this.showSpinner = true;
    this.contactService.create(data).finally(
      () =>{
        Swal.fire({
          title: 'Enviado!',
          text: 'Se enviaron los datos correctamente. Gracias!!',
          icon: 'success'
        })
        this.form.reset();
        this.showSpinner=false
      }
    ).catch(()=> this.showSpinner= false)
  }

}
