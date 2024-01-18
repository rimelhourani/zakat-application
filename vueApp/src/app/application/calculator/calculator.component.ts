import { Component, OnInit } from '@angular/core';
import { MetalPriceService } from 'src/app/shared/currency.service';
import { PriceMetal } from "src/app/shared/price-metal";
import { Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  myForm!: FormGroup;
  
  // this.formulaire = this.fb.group({
  //   fullname: [''],
  //   email: [''],
  //   classe: [''],
  // });  formulaire = new FormGroup({
  //   fullname: new FormControl(),
  //   email: new FormControl(),
  //   classe: new FormControl(),
  // });
  
  cachHome: string = '';
  owedToYou: string = '';
  bankSaving: string = '';
  otherAssets: string = '';
  Gold: string = '';
  Silver: string = '';
  Liabilities: string = '';
  PriceMetal: any;

  
  


  constructor(private metalPriceService: MetalPriceService, private fb: FormBuilder) { }
  currentMetalPrices: any;
  metal: PriceMetal={
    rates: {
      EUR: 0 ,
      GBP: 0,
      PA: 0,
      PL: 0,
      XAG: 0,
      XAU: 0
    },
 
  }
  rate = this.metal.rates
 metals :any
 
 xagXauRates: { currency: string; value: number }[] = [];
  ngOnInit(): void {
     
    this.metalPriceService.getCurrentMetalPrice().subscribe(
      (data:PriceMetal[]) => {
        this.metals = data;
        console.log('hello',this.metals);
        // console.log('rates',this.metals.rates)
        
      },
      (error:any) => {
        console.error('Error fetching metal prices:', error);
      }
    );
  
    this.myForm = this.fb.group({
      gold: [''] // Ensure 'gold' is defined here
    });
    const goldControl = this.myForm.get('gold');

    if (goldControl) {
      goldControl.valueChanges
        .pipe(debounceTime(500)) // adjust the debounce time as needed
        .subscribe(value => {
          // This will be called after the user stops typing for 500 milliseconds
          console.log("********** gold qte : ",value);
          this.Gold = value;
          console.log("******* gold var value", this.Gold)
          // Do whatever you want with the value, e.g., send it to a service, update a variable, etc.
        });
    } else {
      console.error("Form control 'gold' not found");
    }
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}


