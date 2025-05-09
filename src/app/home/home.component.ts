import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public title: string = "Add or Remove User Details";
  public users: any[] = [];
  public userForm: FormGroup;
  public isEdit = false;
  public currentIndex: number = -1;
  currentId = 1;

  constructor(private fb: FormBuilder) {
    //create user form
    this.userForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });
  }


  ngOnInit(){

  }

    editUser(user: any, index: number) {
    this.userForm.patchValue(user);
    this.isEdit = true;
    this.currentIndex = index;
    this.isEdit = true;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    if (index === this.currentIndex) this.resetForm();
  }

  resetForm() {
    this.userForm.reset();
    this.isEdit = false;
    this.currentIndex = -1;
  }

  onSubmit() {
    if (this.userForm.invalid) return;

    if (this.isEdit) {
      this.users[this.currentIndex] = this.userForm.value;
      this.isEdit = false;
      this.currentIndex = -1;
    } else {
      const newUser = {
        ...this.userForm.value,
        id: this.currentId++
      };
      this.users.push(newUser);
      // this.users.push(this.userForm.value);
    }

    this.userForm.reset();
  }

}
