import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/shared/currency.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  exchangeRates: any;
  baseCurrency = 'USD'; // Remplacez par votre devise de base préférée

  constructor(private currencyService: CurrencyService) { }
  currentMetalPrices: any;
  ngOnInit(): void {
    
    this.currencyService.getCurrentMetalPrices().subscribe(data => {
      this.currentMetalPrices = data;
    });
  }
}
