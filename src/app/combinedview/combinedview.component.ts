import { Component,ElementRef, ViewChild,HostListener } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-combinedview',
  templateUrl: './combinedview.component.html',
  styleUrls: ['./combinedview.component.css']
})
export class CombinedviewComponent {
  @ViewChild('homeSection') homeSection!: ElementRef;
  @ViewChild('menuSection') menuSection!: ElementRef;
  @ViewChild('reviewsSection') reviewsSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollSection$.subscribe((section: string) => {
      this.scrollToSection(section);
    });
  }

  scrollToSection(section: string) {
    let targetElement: HTMLElement | null = null;

    switch (section) {
      case 'home':
        targetElement = this.homeSection.nativeElement;
        break;
      case 'menu':
        targetElement = this.menuSection.nativeElement;
        break;
      case 'reviews':
        targetElement = this.reviewsSection.nativeElement;
        break;
      case 'contact':
        targetElement = this.contactSection.nativeElement;
        break;
      default:
        break;
    }

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
