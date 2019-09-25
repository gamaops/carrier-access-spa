import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { environment } from 'src/environments/environment';
import { UnaryOutput } from '@improbable-eng/grpc-web/dist/typings/unary';
import { SignUpService } from '@gamaops/definitions/identity/web/v1.client';
import { SignUpLead, SignUpResponse, SignUpLeadRequest } from '@gamaops/definitions/identity/web/v1';


@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  private readonly options: { host: string } = {
    ...environment.indentityApi,
  };

  public SignUpLead(lead: SignUpLead): Observable<SignUpResponse.AsObject> {
    return new Observable<SignUpResponse.AsObject>(
      subscriber => {
        const request = new SignUpLeadRequest();
        request.setSignUpLead(lead);

        const onEnd = (output: UnaryOutput<SignUpResponse>) => {
          const { status, message } = output;
          switch (status) {
            case grpc.Code.OK:
              subscriber
                .next(message.toObject());
              subscriber
                .complete();
              break;

            default:
              subscriber.error(output); break;
          }
        };

        grpc.unary(SignUpService.SignUpLead, { ...this.options, request, onEnd });
      }
    );
  }
}
