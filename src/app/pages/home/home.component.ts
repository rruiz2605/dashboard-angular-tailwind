import { Component } from '@angular/core';
import { ResumenCardComponent } from '@shared/components/resumen-card/resumen-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResumenCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
