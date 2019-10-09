import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ValidateSignUpRequest } from '@gamaops/definitions/identity/web/v1';

import { codeValidator } from 'src/app/shared/validators/code.validator';

import { TopFadeAnimation } from 'src/app/shared/animations/top-fade.animation';


@Component({
  selector: 'div[app-page="validation"]',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  animations: [TopFadeAnimation],
})
export class ValidationComponent implements OnInit {
  public validateForm: FormGroup;

  public focus = 0;
  public readonly fieldName = 'code_';
  public readonly codeSize = Array(6).fill(0);
  public validate = new ValidateSignUpRequest();

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.mount();
  }

  public setSignUpId(): void {
    this.route.params.subscribe(
      (p) => console.log(p)
    );
  }

  public mount(): void {
    const form = this.codeSize
      .reduce(
        (p, c, i) => (p[this.fieldName + i] = new FormControl(null, codeValidator)) && p,
        {}
      );
    this.validateForm = this.formBuilder.group(form);
  }

  public get code(): string {
    return this.codeSize.map((_, i) => `${this.validateForm.get(this.fieldName + i).value}`).join('');
  }

  public next(e: any): void {
    e.target.value.length && this.focus++;
    this.validate.setValidationCode(this.code);
  }

  public onSubmit(): void {
    console.log(this.validate.toObject());
  }
}
