import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiEndpointService {

  private url = 'https://www.w3schools.com/';

  constructor(private http: HttpClient) {}

  async get_data(): Promise<any> {
    let results: any = await firstValueFrom(this.http.get<any>(this.url));
    console.log(results);

    return results;
  }
}
