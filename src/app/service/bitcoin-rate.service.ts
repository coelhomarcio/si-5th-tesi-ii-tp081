import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface BitcoinRate {
  time: {
    updatedISO: string
  };
  disclaimer: string;
  bpi: {
    USD: {
      rate_float: number
    };
    BRL: {
      rate_float: number
    }
  };
}

@Injectable({
  providedIn: "root"
})
export class BitcoinRateService {
  private _urlAPI = "https://api.coindesk.com/v1/bpi/currentprice/BRL.json";
  private _bitcoinRates: BitcoinRate[] = [];

  constructor(private http: HttpClient) {
  }

  public get bitcoinRates(): BitcoinRate[] {
    return this._bitcoinRates;
  }

  updateBitcoinRate() {
    this.http.get<BitcoinRate>(this._urlAPI).subscribe(data => {
      if (this.bitcoinRates.length === 0) {
        data.disclaimer = "";
        this.bitcoinRates.push(data);
      }
      else {
        let bitcoinRates: BitcoinRate[] = Object.assign([], this.bitcoinRates);
        const lastEl = bitcoinRates.pop()!;
        if (data.bpi.USD.rate_float !== lastEl.bpi.USD.rate_float) {
          if (data.bpi.USD.rate_float > lastEl.bpi.USD.rate_float)
            data.disclaimer = "&uparrow;";
          else
            data.disclaimer = "&downarrow;";
          this.bitcoinRates.push(data);
        }
      }
    });
  }
}
