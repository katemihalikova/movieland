import { Component, Input, inject, PLATFORM_ID, HostBinding } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-wrapper-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './wrapper-list.component.html',
  styleUrl: './wrapper-list.component.scss'
})
export class WrapperListComponent {

  @Input() columnsSm: number = 1;
  @Input() columnsMd: number = 3;
  @Input() columnsLg: number = 5;

  currentColumns: number = this.columnsSm;
  resizeListener?: (() => void);

  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngOnInit() {
    if (this.isBrowser) {
      this.resizeListener = this.setColumns.bind(this);
      window.addEventListener('resize', this.resizeListener);
      this.setColumns();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  setColumns() {
    if (this.isBrowser) {
      if (window.innerWidth >= 1024) {
        this.currentColumns = this.columnsLg;
      } else if (window.innerWidth >= 768) {
        this.currentColumns = this.columnsMd;
      } else {
        this.currentColumns = this.columnsSm;
      }
    }
  }

  @HostBinding('style.gridTemplateColumns')
  get gridTemplateColumns() {
    console.log('gridTemplateColumns: ', this.currentColumns);
    return `repeat(${this.currentColumns}, 1fr)`;
  }

}
