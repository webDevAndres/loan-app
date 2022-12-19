import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accrued-interest',
  templateUrl: './accrued-interest.component.html',
  styleUrls: ['./accrued-interest.component.css']
})
export class AccruedInterestComponent implements OnInit {
  @Input() accruedInterest: number;

  constructor() { }

  ngOnInit(): void {
  }

}
