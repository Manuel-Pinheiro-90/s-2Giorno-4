import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable()
export class MadmaxInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(2),
      catchError((err: HttpErrorResponse) => {
          if (err.status === 0) {

              console.log('An error occurred:', err.error.message);
              // return of()
          } else {

              console.log('Error code: ', err.status);
          }
          return throwError(() => new Error('An error occurred. Please try again later.'));
      })
  );
  }
}
