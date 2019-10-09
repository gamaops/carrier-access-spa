import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SignUpLead } from '@gamaops/definitions/identity/web/v1';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { TopFadeAnimation } from 'src/app/shared/animations/top-fade.animation';

import { nameValidator } from 'src/app/shared/validators/name.validator';
import { emailValidator } from 'src/app/shared/validators/email.validator';
import { cellphoneValidator } from 'src/app/shared/validators/cellphone.validator';
import { IdentityService } from 'src/app/shared/services/identity/identity.service';

@Component({
  selector: 'div[app-page="signup"]',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [
    TopFadeAnimation,
  ]
})
export class SignupComponent implements OnInit {
  public singUpForm: FormGroup;
  public lead = new SignUpLead();

  public show = { cellphone: true, email: false };
  public readonly channels = ['email', 'cellphone'];

  public name = new FormControl(null, nameValidator);
  public email = new FormControl(null, emailValidator);
  public cellphone = new FormControl(null, cellphoneValidator);
  public validationChannel = new FormControl(true, { updateOn: 'change' });

  constructor(
    private identityService: IdentityService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.mountForm();
  }

  public changeChannel(id: 0 | 1): void {
    setTimeout(() => this.show[this.channels[id]] = true, 1000);
    this.show.cellphone = false;
    this.show.email = false;
    this.mountForm(id);
  }

  public mountForm(id: 0 | 1 = 1): void {
    this.lead.setValidationChannel(id);
    const { name, validationChannel } = this;
    this.singUpForm = this.formBuilder.group({
      name,
      validationChannel,
      [this.channels[id]]: this[this.channels[id]],
    }, { updateOn: 'blur' });
  }

  public onSubmit(): void {
    this.identityService
      .SignUpLead(this.lead)
      .subscribe(
        response => this.router
          .navigateByUrl(`/motorista/validacao/${response.signUpId}`),
      );
  }
}
