import { Component, OnInit } from '@angular/core';
import SampleJson from '../../../assets/SampleJson.json';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  data = SampleJson;

  constructor() {
  }

  ngOnInit(): void {
  }

}
