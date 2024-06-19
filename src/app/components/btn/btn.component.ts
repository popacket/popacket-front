import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';

  constructor() { }

  ngOnInit(): void {}

}
