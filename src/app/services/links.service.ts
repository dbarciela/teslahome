import { Injectable } from '@angular/core';
import { Link } from '../model/link';

const LINKS: Link[] = [
  {
    id: 1,
    description: 'Miio',
    iconUrl:
      'https://play-lh.googleusercontent.com/2gkcn0pnhPZhBPgM20s-o_KYU7Gca_sIFDsTq79Jp8plvH1W77Rlw7zfo5Vd1ZO6ric',
    url: 'http://app.miio.pt',
    category: 'CONDUÇÃO',
    favorite: true,
  },
  {
    id: 2,
    description: 'Google',
    iconUrl:
      'https://tekgenius.pt/wp-content/uploads/2016/12/google-logo-icon-PNG-Transparent-Background.png',
    url: 'http://www.google.pt',
    category: 'OUTROS',
    favorite: true,
  },
  {
    id: 3,
    description: 'BeachCam',
    url: 'https://beachcam.meo.pt/livecams/',
    iconUrl:
      'https://play-lh.googleusercontent.com/iCabUzMq4BWCHpYxtBq0Ows33u0-2_WbOSJQP5_fantLWo92SaeLa2OSRjZ5SmGNZv0=w600-h300-pc0xffffff-pd',
    category: 'OUTROS',
    favorite: false,
  },
  {
    id: 4,
    description: 'TripAdvisor',
    iconUrl:
      'https://s3-eu-west-1.amazonaws.com/tpd/logos/46d41b9b000064000500b9bc/0x0.png',
    url: 'https://www.tripadvisor.pt/',
    category: 'CONDUÇÃO',
    favorite: false,
  },
  {
    id: 5,
    description: 'Google Maps',
    url: 'https://www.google.pt/maps',
    iconUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png',
    category: 'CONDUÇÃO',
    favorite: true,
  },
  {
    id: 6,
    description: 'ABRP',
    url: 'https://abetterrouteplanner.com/',
    iconUrl:
      'https://play-lh.googleusercontent.com/sMfxOkvSGh9ZS1OV8kl5cp0D0StQzNKhgfRCREqdkKRw0uw24jar7lzCIZW_XIfBkck=w600-h300-pc0xffffff-pd',
    category: 'CONDUÇÃO',
    favorite: true,
  },
  {
    id: 7,
    description: 'Waze',
    url: 'https://teslawaze.azurewebsites.net/',
    iconUrl:
      'https://developers.google.com/static/waze/images/logo_waze_color_2x_web_64dp.png?hl=pt-br',
    category: 'CONDUÇÃO',
    favorite: true,
  },
  {
    id: 8,
    description: 'Remote Desktop',
    url: 'https://remotedesktop.google.com/access/',
    iconUrl:
      'https://play-lh.googleusercontent.com/I4DRWoABrUQsaAIQFVSKha98q1u2ilEdrwPJBaf9Mb8KdGZnXzs5DObrwcwUZovgOA',
    category: 'OUTROS',
    favorite: false,
  },
  {
    id: 9,
    description: 'Prime Video',
    url: 'https://www.primevideo.com/storefront',
    iconUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/1200px-Amazon_Prime_Video_logo.svg.png',
    category: 'ENTRETENIMENTO',
    favorite: true,
  },
  {
    id: 10,
    description: 'AirConsole',
    iconUrl: 'https://avatars.githubusercontent.com/u/12393047',
    url: 'https://www.airconsole.com/',
    category: 'ENTRETENIMENTO',
    favorite: false,
  },
  {
    id: 11,
    description: 'HBO MAX',
    iconUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/HBO_Max_Logo.svg/2560px-HBO_Max_Logo.svg.png',
    url: 'http://play.hbomax.com',
    category: 'ENTRETENIMENTO',
    favorite: true,
  },
  {
    id: 12,
    description: 'Accuweather',
    url: 'https://www.accuweather.com/pt/pt/portugal-weather',
    iconUrl:
      'https://play-lh.googleusercontent.com/OlSOqjMCcsHip7rt5kDF05-39zKygwyj0IHVQCjwedvpanlj34u2IYVddCbZas8Ohg',
    category: 'OUTROS',
    favorite: true,
  },
  {
    id: 13,
    description: 'HTML 5 Games',
    url: 'https://html5games.com/',
    iconUrl:
      'https://play-lh.googleusercontent.com/ubXag7JaDoqwbn4IiCZGaNCJczu5B4W8kq8-OGBMwKG76Rux4I450ElqFkLrEYezrKw=w600-h300-pc0xffffff-pd',
    category: 'ENTRETENIMENTO',
    favorite: false,
  },
  {
    id: 14,
    description: 'SpeedTest',
    url: 'https://www.speedtest.net/',
    iconUrl:
      'https://www.speedtest.net/s/images/ookla/index/gauge-blue-1x.png',
    category: 'OUTROS',
    favorite: false,
  },
  {
    id: 15,
    description: 'JSConsole',
    url: 'https://jsconsole.com/',
    iconUrl:
      'https://www.saashub.com/images/app/service_logos/82/14985fef05e6/large.png',
    category: 'OUTROS',
    favorite: false,
  },
  {
    id: 16,
    description: 'MyInstants',
    url: 'https://www.myinstants.com/pt/favorites/',
    iconUrl:'https://m.media-amazon.com/images/I/61LNAo2K9RL.png',
    category: 'OUTROS',
    favorite: false,
  },
  {
    id: 17,
    description: 'RedditSoccerStreams',
    url: 'https://www.redditsoccerstreams.tv/',
    iconUrl:'https://www.redditsoccerstreams.tv/wp-content/uploads/2020/10/cropped-Soccer-Streams-logo.png',
    category: 'ENTRETENIMENTO',
    favorite: true,
  },
];


@Injectable({
  providedIn: 'root',
})

export class LinksService {

  constructor() {}

  findCategories(): string[] {
    return [
      ...new Set<string>(LINKS.map((link: Link) => link.category)),
    ].sort((a, b) => a.localeCompare(b));
  }

  getFavoriteLinks(): Link[] {
    return LINKS.filter((link: Link) => link.favorite).sort(
      (a: Link, b: Link) => a.description.localeCompare(b.description)
    );
  }
  
  getAllLinks(): Link[] {
    return LINKS;
  }
}
