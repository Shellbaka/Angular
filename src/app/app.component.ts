import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header-2/header-2.component'; 
import { AvisosComponent } from './avisos/avisos.component';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],  
  standalone: true,  
  imports: [HeaderComponent, Header2Component, AvisosComponent]  
})
export class AppComponent {
}
