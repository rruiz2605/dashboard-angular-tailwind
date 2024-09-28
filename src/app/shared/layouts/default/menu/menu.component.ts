import { CommonModule } from '@angular/common';
import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isOpenNav = signal(false);
  mode = signal('light');
  changeStateNav = output<boolean>();

  toggleNav() {
    this.isOpenNav.update(x => !x);
    this.changeStateNav.emit(this.isOpenNav());
  }

  setMode(mode: 'dark' | 'light') {
    this.mode.set(mode);
    if (this.mode() === 'dark') 
      document.documentElement.classList.add('dark');
    else
      document.documentElement.classList.remove('dark');
  }
}
