import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewPageService {
  constructor(private http: HttpClient) {}

  // change URL to your API
  getData(): Observable<any> {
    return this.http.get<any>(
      'https://api.massive.com/v3/reference/dividends?apiKey=_fqd8SdnJegqlm1JsZ_FGxvdaSXv5Ten'
    );
  }
}
