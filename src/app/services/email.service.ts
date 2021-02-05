import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Email } from '../models/email.model';

@Injectable()
export class EmailService {
  private URL_SERVICE: string = 'https://x-wave.eu/api/sendMail';

  constructor(
    private httpClient: HttpClient) {
  }

  private send(datas: Email): Observable<any> {
    return Observable.create(
      (observer) => {
        this.httpClient.post(this.URL_SERVICE, datas).subscribe(
          (result) => {
            observer.next(true);
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        )
      }
    )
  }

  createEmail() {
    let email: Email = new Email();
    let subject = 'subject';
    email.to = 'to';
    email.from = 'from';
    email.subject = subject;
  }
}
