import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

 export const interceptApiKey:HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

  const apiKey = import.meta.env.API_KEY;

    const modifiedReq = req.clone({
      params: req.params.set('api_key', apiKey)
    });

    return next(modifiedReq);
  }
