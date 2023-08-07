import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit{
  title: String  = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route: ActivatedRoute = this.router.routerState.root;
        let routeTitle = '';
        while (route!.firstChild) {
          route = route.firstChild;
        }
        if (route.snapshot.title) {
          routeTitle = route!.snapshot.title;
        }
        return routeTitle;
      })
    )
    .subscribe((title: string) => {
      if (title) {
        this.title = title;
      }
    });
  }
  
}
