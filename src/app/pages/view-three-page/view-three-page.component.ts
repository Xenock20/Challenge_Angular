import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-view-three-page',
  templateUrl: './view-three-page.component.html',
  styleUrls: ['./view-three-page.component.css']
})
export class ViewThreePageComponent {
  opciones = ['Opción 1', 'Opción 2', 'Opción 3'];
  selectedOption: BehaviorSubject<string> = new BehaviorSubject<string>('');

  formOption1: FormGroup;
  formOption2: FormGroup;
  formOption3: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formOption1 = this.fb.group({
      campo1: ['', Validators.required],
      campo2: [''],
    });

    this.formOption2 = this.fb.group({
      campoA: ['', Validators.required],
      campoB: [''],
    });

    this.formOption3 = this.fb.group({
      campoX: ['', Validators.required],
      campoY: [''],
    });
  }

  setSelectedOption(option: string) {
    this.selectedOption.next(option);
  }

  submitForm(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
    } else {
      console.error("Invalido");
      
    }
  }
  
}
