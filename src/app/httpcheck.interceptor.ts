import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpcheckInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}

// -----------------------------------------------------

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  // created an array containing URL keywords specific to logged-in state, to direct the intercept to add locally stored token as header and applying forced logout if token is expired or invalid
  allowLogout: string[] = ['self', 'users', 'products'];
  passIntercept: boolean = false;
  passCustomerIntercept: boolean = false;

  constructor(
    private lstore: LocalStorageService,
    private toasterService: HotToastService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.allowLogout.forEach((api) => {
      if (request.url.includes(api)) {
        if (
          !request.url.includes('shop') &&
          !request.url.includes('customers')
        ) {
          this.passIntercept = true;
          console.log('added header for', request.url);
        } else {
          this.passIntercept = false;
        }
      }
    });

    let token = this.lstore.getToken();
    if (token && this.passIntercept) {
      let clonedReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      return next.handle(clonedReq).pipe(
        catchError((err) => {
          if (err.status === 401 && this.passIntercept) {
            console.log('Forced logout because token is expired or invalid!!!');
            this.lstore.logout();
            this.toasterService.error(
              'Forced Logout: User Authentication Error'
            );
          }
          console.log(err);
          const error = err.error.message || err.statusText;
          return throwError(() => new Error(error));
        })
      );
    }

    return next.handle(request).pipe(
      catchError((err) => {
        const error = err.error.message || err.statusText;
        this.toasterService.error(error);
        return throwError(() => new Error(error));
      })
    );
  }
}
