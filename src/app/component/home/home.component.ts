import { Component, OnInit } from "@angular/core";

import { BitcoinRate, BitcoinRateService } from "../../service/bitcoin-rate.service";
import { TimerService }                    from "../../service/timer.service";

@Component({
  selector:    "app-home",
  templateUrl: "./home.component.html",
  styleUrls:   ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public arrows = "&uparrow;&nbsp;&nbsp;&downarrow;";

  constructor(
    public bitcoinService: BitcoinRateService,
    public timerService: TimerService
  ) {
  }

  ngOnInit(): void {
    this.bitcoinService.updateBitcoinRate();
    this.timerService.refreshBitcoinRates();
  }

  public isUp(obj: BitcoinRate) {
    return obj.disclaimer === "&uparrow;";
  }

  public isDown(obj: BitcoinRate) {
    return obj.disclaimer === "&downarrow;";
  }
}
