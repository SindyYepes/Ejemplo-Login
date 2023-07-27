import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba2';
  customer! : any[];
  cols: any;

  @Input() fieldGroupBy: string = 'representative.name';

  constructor(private readonly router:Router) {}
  irAInicio(): void {
    this.router.navigate(['inicio'])
  }
}
