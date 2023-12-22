import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSectionSource = new Subject<string>();
  scrollSection$ = this.scrollSectionSource.asObservable();

  scrollToSection(section: string) {
    this.scrollSectionSource.next(section);
  }
}