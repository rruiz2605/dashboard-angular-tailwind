import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  type = input.required<'Info' | 'Warn' | 'Danger' | 'Success'>();
  typeClass = computed(() => {
    switch (this.type()) {
      case 'Info':
        return 'text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800';
      case 'Warn':
        return 'text-amber-700 bg-amber-100 dark:bg-amber-200 dark:text-amber-800';
      case 'Danger':
        return 'text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800';
      case 'Success':
        return 'text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800';
    }
  });

  title = input.required<string>();
  text = input.required<string>();
}
