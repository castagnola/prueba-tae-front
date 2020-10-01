import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorInterface } from '../../interfaces/autor-interface/autor';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  //Events
  @Output() onEmitCreate = new EventEmitter();
  @Input() autores: AutorInterface[];

  //Properties
  form: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup();
  }

  /**
   *
   *
   */
  formGroup() {
    this.form = this.fb.group({
      titulo: ['', Validators.compose([Validators.required])],
      contenido: ['', Validators.compose([Validators.required])],
      imagen: ['', Validators.compose([Validators.required])],
      autor_id: ['', Validators.compose([Validators.required])],
    });
  }

  /**
   *
   *
   * @param form
   */
  onSubmit(form) {
    form.valid ? this.onEmitCreate.emit(form.value) : (this.isSubmitted = true);
  }
}
