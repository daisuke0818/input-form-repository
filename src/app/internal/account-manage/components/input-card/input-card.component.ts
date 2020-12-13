import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss'],
})
export class InputCardComponent implements OnInit {
  nameForm: FormControl = new FormControl('ayukawa');

  constructor() {}

  ngOnInit(): void {
    this.nameForm.valueChanges.subscribe((data) => console.log(data));
  }
}
