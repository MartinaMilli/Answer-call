import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poziv',
  templateUrl: './poziv.component.html',
  styleUrls: ['./poziv.component.scss']
})
export class PozivComponent implements OnInit {

  stop = [];
  start = ['call'];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    this.router.navigate(['poziv-u-tijeku']);
  }

}
