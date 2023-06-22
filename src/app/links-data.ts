import { Link } from './model/link';

export const LINKS: any = [
  {
    id: 1,
    description: 'Miio',
    iconUrl:
      'https://play-lh.googleusercontent.com/2gkcn0pnhPZhBPgM20s-o_KYU7Gca_sIFDsTq79Jp8plvH1W77Rlw7zfo5Vd1ZO6ric',
    url: 'http://app.miio.pt',
    lessonsCount: 10,
    category: 'CONDUÇÃO',
  },
  {
    id: 2,
    description: 'Google',
    iconUrl:
      'https://tekgenius.pt/wp-content/uploads/2016/12/google-logo-icon-PNG-Transparent-Background.png',
    url: 'http://www.google.pt',
    category: 'OUTROS',
    lessonsCount: 10,
  },

  {
    id: 3,
    description: 'NgRx In Depth',
    url: 'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
    category: 'OUTROS',
  },

  {
    id: 4,
    description: 'Angular for Beginners',
    iconUrl:
      'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
    url: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
    category: 'OUTROS',
    lessonsCount: 10,
  },
  {
    id: 5,
    description: 'Angular Security Course',
    url: 'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
    category: 'OUTROS',
    lessonsCount: 11,
  },
  {
    id: 6,
    description: 'ABRP',
    url: 'https://abetterrouteplanner.com/',
    iconUrl:
      'https://play-lh.googleusercontent.com/sMfxOkvSGh9ZS1OV8kl5cp0D0StQzNKhgfRCREqdkKRw0uw24jar7lzCIZW_XIfBkck=w600-h300-pc0xffffff-pd',
    category: 'CONDUÇÃO',
    lessonsCount: 8,
  },
  {
    id: 7,
    description: 'Waze',
    url: 'https://teslawaze.azurewebsites.net/',
    iconUrl:
      'https://developers.google.com/static/waze/images/logo_waze_color_2x_web_64dp.png?hl=pt-br',
    category: 'CONDUÇÃO',
  },
  {
    id: 8,
    description: 'Complete Typescript Course',
    url: 'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.',
    iconUrl:
      'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
    category: 'OUTROS',
  },
  {
    id: 9,
    description: 'Prime Video',
    url: 'https://www.primevideo.com/storefront',
    iconUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/1200px-Amazon_Prime_Video_logo.svg.png',
    category: 'MULTIMEDIA',
  },
  {
    id: 10,
    description: 'Whatsapp',
    iconUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png',
    url: 'https://web.whatsapp.com/',
    category: 'OUTROS',
  },
  {
    id: 11,
    description: 'HBO MAX',
    iconUrl: 'assets/HBO-Max-Logo-700x394.png',
    url: 'http://play.hbomax.com',
    category: 'MULTIMEDIA',
  },
];

export function findCategories(): string[] {
  return [...new Set<string>(LINKS.map((link: Link) => link.category))].sort(
    (a, b) => a.localeCompare(b)
  );
}

export function findByCategory(category: string): Link[] {
  return LINKS.filter((link: Link) => link.category === category).sort(
    (a: Link, b: Link) => a.description.localeCompare(b.description)
  );
}

export function getLinks(): Link[] {
  return LINKS.sort((a: Link, b: Link) =>
    a.description.localeCompare(b.description)
  );
}
