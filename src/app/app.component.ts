import { Component } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],  
  standalone: true,  
  imports: [HomepageComponent]  
})
export class AppComponent {
}
