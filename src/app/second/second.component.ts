import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotToRoute(route: string = 'fourth'): void {
    this.router.navigateByUrl(route).then(() => {
      console.log(this.router.url);
    });
  }
}
