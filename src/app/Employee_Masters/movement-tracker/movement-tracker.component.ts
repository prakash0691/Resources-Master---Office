import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movement-tracker',
  templateUrl: './movement-tracker.component.html',
  styleUrls: ['./movement-tracker.component.css']
})
export class MovementTrackerComponent implements OnInit {

  disableSelect = new FormControl(false);
  
  constructor() { }

  
  ngOnInit() {
  }

 
}
