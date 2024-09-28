import { CommonModule } from '@angular/common';
import { Component, output, signal } from '@angular/core';
import { FileReaderService } from '../../../services/file-reader.service';
import { SafeHtml } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isOpenNav = signal(false);
  changeStateNav = output<boolean>();
  isDark = signal(false);

  sunIcon = signal<SafeHtml>('');
  moonIcon = signal<SafeHtml>('');
  modeIcon = signal<SafeHtml>('');
  bellIcon = signal<SafeHtml>('');
  expandIcon = signal<SafeHtml>('');
  homeIcon = signal<SafeHtml>('');
  tableIcon = signal<SafeHtml>('');
  graphIcon = signal<SafeHtml>('');

  constructor(private fileReaderService: FileReaderService) {
    forkJoin([
      this.fileReaderService.readSVG('icons/sun.svg'),
      this.fileReaderService.readSVG('icons/moon.svg'),
      this.fileReaderService.readSVG('icons/bell.svg'),
      this.fileReaderService.readSVG('icons/expand.svg'),
      this.fileReaderService.readSVG('icons/home.svg'),
      this.fileReaderService.readSVG('icons/table.svg'),
      this.fileReaderService.readSVG('icons/graph.svg'),
    ]).subscribe(([sun, moon, bell, expand, home, table, graph]) => {
      this.sunIcon.set(sun);
      this.moonIcon.set(moon);
      this.modeIcon.set(moon);
      this.bellIcon.set(bell);
      this.expandIcon.set(expand);
      this.homeIcon.set(home);
      this.tableIcon.set(table);
      this.graphIcon.set(graph);
    });
  }

  toggleNav() {
    this.isOpenNav.update(x => !x);
    this.changeStateNav.emit(this.isOpenNav());
  }

  toggleMode() {
    this.isDark.update(x => !x);
    if (this.isDark()) {
      document.documentElement.classList.add('dark');
      this.modeIcon.set(this.sunIcon());
    }
    else {
      document.documentElement.classList.remove('dark');
      this.modeIcon.set(this.moonIcon());
    }
  }
}
