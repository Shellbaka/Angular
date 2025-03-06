import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { Header2Component } from '../../Components/header-2/header-2.component'; 
import { AvisosComponent } from '../../Components/avisos/avisos.component';
import { FooterComponent } from '../../Components/footer/footer.component';


@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, Header2Component, AvisosComponent,FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  dynamicText = `Faça parte agora também da nossa comunidade.<br><br>
    Um jogo totalmente online e simulador para viciar e testar combos animais que você nunca imaginou antes.`;
  
}
