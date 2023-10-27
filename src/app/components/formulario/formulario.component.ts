import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  myForm: FormGroup;
  isFormComplete = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      phone: [''],
      surname: [''],
      name: [''],
      email: [''],
      dni: [''],
    });
  }

  ngOnInit() {
    // Suscríbete a los cambios en el formulario
    this.myForm.valueChanges.subscribe(() => {
      this.isFormComplete = this.myForm.valid;
    });
  }

  onSubmit(){
    console.log("Enviando... (simulacion)");
  }
}
