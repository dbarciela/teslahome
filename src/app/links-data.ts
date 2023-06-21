import { Link } from './model/link';

export const LINKS: any = [
  {
    id: 1,
    description: 'Angular Core Deep Dive',
    iconUrl:
      'https://play-lh.googleusercontent.com/2gkcn0pnhPZhBPgM20s-o_KYU7Gca_sIFDsTq79Jp8plvH1W77Rlw7zfo5Vd1ZO6ric',
    url: 'http://app.miio.pt',
    lessonsCount: 10,
    category: 'NAV'
  },
  {
    id: 2,
    description: 'RxJs In Practice Course',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
    url:
      'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
    category: 'BEGINNER',
    lessonsCount: 10,
  },

  {
    id: 3,
    description: 'NgRx In Depth',
    url:
      'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
    category: 'ADVANCED',
  },

  {
    id: 4,
    description: 'Angular for Beginners',
    iconUrl:
      'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
    url:
      "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
    category: 'BEGINNER',
    lessonsCount: 10,
  },
  {
    id: 5,
    description: 'Angular Security Course',
    url:
      'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
    category: 'ADVANCED',
    lessonsCount: 11,
  },
  {
    id: 6,
    description: 'Angular PWA Course',
    url:
      'Learn Angular Progressive Web Applications, build the future of the Web Today.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
    category: 'ADVANCED',
    lessonsCount: 8,
  },
  {
    id: 7,
    description: 'Angular Advanced Course',
    url:
      'Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm',
    iconUrl:
      'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
    category: 'ADVANCED',
  },
  {
    id: 8,
    description: 'Complete Typescript Course',
    url:
      'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.',
    iconUrl:
      'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
    category: 'BEGINNER',
  },
  {
    id: 9,
    description: 'Angular Architecture Course',
    url:
      'Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
    category: 'BEGINNER',
  },
  {
    id: 10,
    description: 'Angular Material Course',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png',
    url:
      'Build Applications with the official Angular Widget Library',
    category: 'ADVANCED',
  },
  {
    id: 11,
    description: 'HBO MAX',
    iconUrl:
      'assets/HBO-Max-Logo-700x394.png',
    url:
      'http://play.hbomax.com',
    category: 'VIDEO',
  },
];

export function findCategories(): string[] {
  return [...new Set<string>(LINKS.map((link: Link) => link.category))];
}

export function findByCategory(category: string): Link[] {
  return LINKS.filter((link: Link) => link.category===category);
}
