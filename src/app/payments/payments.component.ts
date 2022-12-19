import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  @Input() payments: number;


  constructor() { }

  ngOnInit(): void {
  }

}
