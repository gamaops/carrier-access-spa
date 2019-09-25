import { Component, OnInit } from '@angular/core';
import { SignUpLead } from '@gamaops/definitions/identity/web/v1';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { nameValidator } from 'src/app/shared/validators/name.validator';
import { emailValidator } from 'src/app/shared/validators/email.validator';
import { cellphoneValidator } from 'src/app/shared/validators/cellphone.validator';
import { binaryValidator } from 'src/app/shared/validators/binary.validator';

@Component({
  selector: 'div[appSignup]',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public lead = new SignUpLead();
  public singUpForm: FormGroup;

  public name = new FormControl(null, nameValidator);
  public email = new FormControl(null, emailValidator);
  public cellphone = new FormControl(null, cellphoneValidator);
  public validationChannel = new FormControl(null, binaryValidator);

  constructor(
    private formBuilder: FormBuilder,
  ) {
    // $('body').on('blur', 'input', function () {
    //   if (!$(this).val().length > 0) {
    //     $(this).parent().removeClass('focus');
    //   }
    // });

    // $('body').on('keyup', 'input', function () {
    //   if ($(this).val().length > 0) {
    //     $(this).parent().addClass('active');
    //   } else {
    //     $(this).parent().removeClass('active wrong success');
    //     $('label').text('Email')
    //   }
    // });

    // $('body').on('keypress', 'input', function (event) {
    //   var keyCode = event.which;

    //   if (keyCode === 13) {
    //     if ($(this).val().length > 0) {
    //       if ($(this).val() === 'success@gmail.com') {
    //         $('.group').removeClass('wrong');
    //         $('.group').addClass('success');
    //         $('label').text('Email')
    //       } else {
    //         $('.group').removeClass('success');
    //         $('.group').addClass('wrong');
    //         $('label').text('Email format invalid')
    //       }
    //     }
    //   }
    // });
    this.name.getError;
  }

  public ngOnInit(): void {
    const { name, email, cellphone, validationChannel } = this;
    this.singUpForm = this.formBuilder.group({ name, email, cellphone, validationChannel }, { updateOn: 'blur' });
  }

  public onSubmit(): void {
    console.log(this.lead.toObject());
  }
}
