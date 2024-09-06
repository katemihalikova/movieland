import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

 export const interceptApiKey:HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    console.log('Intercepted Request:', req);

    const modifiedReq = req.clone({
      params: req.params.set('api_key', '873e6334422e12d4227b13e0cb924ef3')
    });

    console.log('Modified Request:', modifiedReq);

    return next(modifiedReq);
  }
