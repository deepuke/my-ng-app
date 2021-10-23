import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpMiddleInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let httpAuth = request.headers.get('Authorization');
    httpAuth = 'Berer ' + httpAuth;
    request.headers.set('Authorization', httpAuth);
    request.headers.set('name', 'Deepu');
    console.log(request);

    return next.handle(request);
  }
}
