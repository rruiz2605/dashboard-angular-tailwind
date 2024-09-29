import { CommonModule } from '@angular/common';
import { Component, OnInit, output, signal } from '@angular/core';
import { FileReaderService } from '@services/file-reader.service';
import { SafeHtml } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { IMenuItem } from '@models/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  isOpenNav = signal(false);
  changeStateNav = output<boolean>();
  isDark = signal(false);

  sunIcon: SafeHtml = '';
  moonIcon:SafeHtml = '';
  modeIcon = signal<SafeHtml>('');
  bellIcon = signal<SafeHtml>('');
  expandIcon = signal<SafeHtml>('');

  menuItems = signal<IMenuItem[]>([]);
  selectOption = output<IMenuItem>();

  constructor(private fileReaderService: FileReaderService) {}
  
  ngOnInit(): void {
    forkJoin([
      this.fileReaderService.readSVG('icons/sun.svg'),
      this.fileReaderService.readSVG('icons/moon.svg'),
      this.fileReaderService.readSVG('icons/bell.svg'),
      this.fileReaderService.readSVG('icons/expand.svg'),
      this.fileReaderService.readSVG('icons/home.svg'),
      this.fileReaderService.readSVG('icons/table.svg'),
      this.fileReaderService.readSVG('icons/graph.svg'),
    ]).subscribe(([sun, moon, bell, expand, home, table, graph]) => {
      this.sunIcon = sun;
      this.moonIcon = moon;
      this.modeIcon.set(moon);
      this.bellIcon.set(bell);
      this.expandIcon.set(expand);

      this.menuItems.set([
        {
          title: 'Home',
          icon: home,
          url: ''
        },
        {
          title: 'Table',
          icon: table,
          url: '/table'
        },
        {
          title: 'Graph',
          icon: graph,
          url: '/graph'
        }
      ]);

      this.selectOption.emit(this.menuItems()[0]);
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
      this.modeIcon.set(this.sunIcon);
    }
    else {
      document.documentElement.classList.remove('dark');
      this.modeIcon.set(this.moonIcon);
    }
  }

  selectOptionClick(item: IMenuItem) {
    this.selectOption.emit(item);
  }
}
