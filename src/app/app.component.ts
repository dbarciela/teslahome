import { Component, ViewEncapsulation } from '@angular/core';
import { Link } from './model/link';
import { LinkCardComponent } from './link-card/link-card.component';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { LinksService } from './services/links.service';
import { GroupBy } from "./pipes/group-by";
import { OrderBy } from "./pipes/order-by";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatTabsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, NgIf, NgFor, LinkCardComponent, CommonModule, GroupBy, OrderBy]
})

export class AppComponent {
  title = 'teslahome';

  selectedTab = 0;
  tabCount = 0; //include favorites tab

  toUrl = 'http://';

  links: Link[] = [];

  swipeCoord: [number, number] = [0, 0];
  swipeTime: number = 0;

  constructor(private linksSrv: LinksService) {

  }

  ngOnInit(): void {
    console.info('Fetching links');
    this.linksSrv.loadAllLinks().subscribe({
      next: (data: Link[]) => {
        console.info('Links fetched successfully!');
        this.links = data;
        this.tabCount = this.getCategories().length + 1
      },
      error: (error: any) => {
        console.error('Error fetching links', error);
      }
    });
  }

  getCategories(): string[] {
    return this.findCategories();
  }

  getFavorites(): Link[] {
    return this.getFavoriteLinks();
  }
  findCategories(): string[] {
    return [
      ...new Set<string>(this.links.map((link: Link) => link.category)),
    ].sort((a, b) => a.localeCompare(b));
  }

  getFavoriteLinks(): Link[] {
    return this.links.filter((link: Link) => link.favorite).sort(
      (a: Link, b: Link) => a.description.localeCompare(b.description)
    );
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
