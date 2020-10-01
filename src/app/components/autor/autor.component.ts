import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutorInterface } from '../../interfaces/autor-interface/autor';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css'],
})
export class AutorComponent implements OnInit {
  //Events
  @Output() onEmitCreate = new EventEmitter();

  //Properties
  form: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup();
  }

  formGroup() {
    this.form = this.fb.group({
      nombre: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(20)]),
      ],
      apellidos: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(20)]),
      ],
    });
  }

  onSubmit(form) {
    form.valid ? this.onEmitCreate.emit(form.value) : (this.isSubmitted = true);
  }
}
