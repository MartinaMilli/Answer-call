import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poziv-u-tijeku',
  templateUrl: './poziv-u-tijeku.component.html',
  styleUrls: ['./poziv-u-tijeku.component.scss']
})
export class PozivUTijekuComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
