import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityService } from 'src/app/shared/services/identity/identity.service';
import { FormFieldDirective } from 'src/app/shared/directives/form-field/form-field.directive';

const shared: (any[] | Type<any>)[] = [
  FormFieldDirective,
];

@NgModule({
  declarations: [...shared],
  exports: [...shared],
  imports: [CommonModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        IdentityService,
      ],
    };
  }
}
