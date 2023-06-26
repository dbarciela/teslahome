import { Component, ViewEncapsulation } from '@angular/core';
import { LINKS, findCategories, findByCategory, getFavoriteLinks} from './links-data';
import { Link } from './model/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'teslahome';

  selectedTab = 1;
  tabCount = this.getCategories().length + 1; //include favorites tab

  toUrl = 'http://';

  links = LINKS;

  swipeCoord: [number, number] = [0, 0];
  swipeTime: number = 0;

  getCategories(): string[] {
    return findCategories();
  }

  getLinksByCategory(category: string): Link[] {
    return findByCategory(category);
  }

  getFavorites(): Link[] {
    return getFavoriteLinks();
  }

  goFullScreen(): void {
    this.goToFullScreen(window.location.href);
  }

  goToFullScreen(url: string): void {
    this.goTo('https://www.youtube.com/redirect?q=' + url);
  }

  goTo(url: string): void {
    window.location.href = url;
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY,
    ];
    const time = new Date().getTime();
    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [
        coord[0] - this.swipeCoord[0],
        coord[1] - this.swipeCoord[1],
      ];
      const duration = time - this.swipeTime;
      if (
        duration < 1000 && //
        Math.abs(direction[0]) > 30 && // Long enough
        Math.abs(direction[0]) > Math.abs(direction[1] * 3)
      ) {
        // Horizontal enough
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        if (swipe === 'next') {
          this.selectedTab = (this.selectedTab + 1) % this.tabCount;
        } else if (swipe === 'previous') {
          this.selectedTab = (this.tabCount + (this.selectedTab - 1)) % this.tabCount;
        }
      }
    }
  }
}
