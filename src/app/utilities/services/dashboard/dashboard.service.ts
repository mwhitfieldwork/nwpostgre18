import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { BarOrderDetail } from '../../models/bar-order-detail';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SalesTotal } from '../../models/salesTotal';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _http = inject(HttpClient)
  url:string =  environment.apiUrl;
  errorMessage:any;
  constructor() { }

  getOrderDetails(): Observable<BarOrderDetail[]> {
    return this._http.get<BarOrderDetail[]>(`${this.url}/Dashboard/totals`)
    .pipe( 
      tap(items => {
        console.log(this.url,)
      }),
      catchError(this.handleError),
    )
  }

  getSalesTotals(beginningDate: string, endingDate: string): Observable<SalesTotal[]> {
    return this._http.get<SalesTotal[]>(`${this.url}/Dashboard/salestotals?beginningDate=${beginningDate}&endingDate=${endingDate}`)
    .pipe( 
      tap(items => {
        console.log(this.url, '--sales totals');
      }),
      catchError(this.handleError),
    )
  }

  private handleError(error: Response) {
    console.error(error);
    return throwError(() => error || 'Server error');
  }
}
