import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR/EUR'; // Remplacez par l'URL réelle de l'API
  private apiKey = 'c19d56546bmsh601445ee1cca141p196e2bjsn256a184d409b';

  constructor(private http: HttpClient) { }


  getCurrentMetalPrices(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.apiKey
    });

  return this.http.get<any>(`${this.apiUrl}/current-prices`, { headers });
}
}