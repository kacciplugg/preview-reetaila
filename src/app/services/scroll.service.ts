import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  resetScroll() {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });

      // Fallbacks
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Double-check after a small delay
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    });
  }
}
