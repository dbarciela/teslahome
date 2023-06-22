import { Component, ViewEncapsulation } from '@angular/core';
import { LINKS, findCategories, findByCategory, getLinks } from './links-data';
import { Link } from './model/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'teslahome';

  toUrl = 'http://';

  links = LINKS;

  getCategories(): string[] {
    return findCategories();
  }

  getLinksByCategory(category: string): Link[] {
    return findByCategory(category);
  }

  getLinks(): Link[] {
    return getLinks();
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
}
