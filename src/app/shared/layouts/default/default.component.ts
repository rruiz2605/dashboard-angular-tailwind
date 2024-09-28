import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent, MenuComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export default class DefaultComponent {
  isOpenNav = signal(false);
  mode = signal('light');
}
