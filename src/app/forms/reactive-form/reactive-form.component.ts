import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup, AbstractControl} from '@angular/forms';
import {User} from '../models/user';
import {UserService} from '../service/user-service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  isValidFormSubmitted = null;
  userForm: FormGroup;
  formErrors = {
    'fullName': '',
    'email': '',
    'confirmEmail': '',
    'emailGroup': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };
  validationMessages = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 10 characters.'
    },
    'email': {
      'required': 'Email is required.',
    },
    'emailGroup': {
      'emailMismach': 'email mismach error.',
    },
    'confirmEmail': {
      'required': 'confirm Email is required.',
    },
    'skillName': {
      'required': 'Skill Name is required.',
    },
    'experienceInYears': {
      'required': 'Experience is required.',
    },
    'proficiency': {
      'required': 'Proficiency is required.',
    },
  };


  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fullName: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(10)]],
      emailGroup: this.formBuilder.group({
        email: ['', Validators.required],
        confirmEmail: ['', Validators.required],
      }, {validator: this.matchEmail}),
      skills: this.formBuilder.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      }),
    });
    this.userForm.valueChanges.subscribe(valueChanges => {
      this.logKeyValue(this.userForm);

    })
  }

  logKeyValue(group= this.userForm){
    Object.keys(group.controls).forEach((key) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';
      if(abstractControl && !abstractControl.valid) {
        const message = this.validationMessages[key];
        for(const errorKey in abstractControl.errors) {
          if(errorKey) {
            this.formErrors[key] += message[errorKey] + ' ';
          }
        }
      }
      if(abstractControl instanceof FormGroup) {
        this.logKeyValue(abstractControl);
      }
    }, this);
  }


  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    const user: User = this.userForm.value;
    this.userService.createUser(user);
    this.userForm.reset();
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  get mobileNumber() {
    return this.userForm.get('mobileNumber');
  }

  get email() {
    return this.userForm.get('email');
  }


   matchEmail(group: AbstractControl): {[key: string]: any} | null {
    const password: string = group.get('email').value; // get password from our password form control
    const confirmPassword: string = group.get('confirmEmail').value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      return {'emailMismach': true}
    } else {
      return null;
    }
  }


}
