import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Header2Component } from '../header-2/header-2.component'; 
import { AvisosComponent } from '../avisos/avisos.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, Header2Component, AvisosComponent,FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
