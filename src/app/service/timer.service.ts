import { Injectable }         from "@angular/core";
import { BitcoinRateService } from "./bitcoin-rate.service";

@Injectable({
  providedIn: "root"
})
export class TimerService {
  private _interval: any;
  private _timer = 60000;

  constructor(private bitcoinRates: BitcoinRateService) {
  }

  refreshBitcoinRates() {
    this._interval = setInterval(() => {
      this.bitcoinRates.updateBitcoinRate();
    }, this._timer);
  }
}
