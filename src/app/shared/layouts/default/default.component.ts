import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { IMenuItem } from '@shared/models/menu';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent, MenuComponent, BreadcrumbComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export default class DefaultComponent {
  isOpenNav = signal(false);
  mode = signal('light');
  seletedMenuItem = signal<IMenuItem>({});
}
