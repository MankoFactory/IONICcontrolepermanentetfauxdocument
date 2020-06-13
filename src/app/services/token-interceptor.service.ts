import { Injectable, Injector  } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { AuthentService } from './authent.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(request, next) {
    const authentService = this.injector.get(AuthentService);
    const tokenrequest = request.clone ({
      setHeaders: {
      Authorization: `Bearer ${authentService.getToken()}`
      }
    });
    return next.handle(tokenrequest);
  }
}