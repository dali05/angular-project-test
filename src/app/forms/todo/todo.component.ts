import {Component, OnInit} from '@angular/core';
import {Todo} from '../models/todo';
import {Etudiant} from '../models/etudiant';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  etudiant: Etudiant = new Etudiant();
  // etudiantForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl('')
  // });

  constructor(private fb: FormBuilder) {
  }

  etudiantForm = this.fb.group({
    name: [''],
    email: ['', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]
  });

  ngOnInit() {


  }

  onSubmit() {
    console.warn(this.etudiantForm.value);
  }

  log(x) {
    console.log(x);
  }

  get email() {
    return this.etudiantForm.get('email');
  }

  get f() {
    return this.etudiantForm.controls;
  }

}
