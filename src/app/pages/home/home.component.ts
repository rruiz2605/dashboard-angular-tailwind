import { Component } from '@angular/core';
import { AlertComponent } from '@components/alert/alert.component';
import { ResumenCardComponent } from '@components/resumen-card/resumen-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResumenCardComponent, AlertComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
