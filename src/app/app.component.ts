import { Component, ViewEncapsulation } from '@angular/core';
import { LINKS, findCategories, findByCategory } from './links-data';
import { Link } from './model/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'teslahome';

  links = LINKS;

  getCategories(): string[] {
    return findCategories();
  }

  getLinks(category: string): Link[] {
    return findByCategory(category);
  }

  goFullScreen(url: string): void {
    this.go('https://www.youtube.com/redirect?q=' + url);
  }

  go(url: string): void {
    window.location.href = url;
  }
}
