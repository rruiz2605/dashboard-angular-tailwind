import { Component, input, OnInit, signal } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { FileReaderService } from '@shared/services/file-reader.service';

@Component({
  selector: 'app-resumen-card',
  standalone: true,
  imports: [],
  templateUrl: './resumen-card.component.html',
  styleUrl: './resumen-card.component.scss'
})
export class ResumenCardComponent implements OnInit {
  iconName = input.required<string>();
  icon = signal<SafeHtml>('');
  title = input.required<string>();
  text = input.required<string>();

  constructor(private fileReaderService: FileReaderService) { }

  ngOnInit(): void {
    this.fileReaderService.readSVG(`icons/${this.iconName()}.svg`)
      .subscribe((icon) => {
        this.icon.set(icon);
      });
  }
}
