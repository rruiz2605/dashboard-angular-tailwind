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
  changeMode = output<string>();

  toggleNav() {
    this.isOpenNav.update(x => !x);
    this.changeStateNav.emit(this.isOpenNav());
  }

  setMode(mode: string) {
    this.mode.set(mode);
    this.changeMode.emit(this.mode());
  }
}
