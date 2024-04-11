import youtubeSeance from '../../public/session_1.svg';
import whatsapSeance from '../../public/session_2.svg';
import zoomSeance from '../../public/session_3.svg';
import { CourseProgam, courseDirectionsDisplay } from '@/lib/types';

export const coursProgram: CourseProgam[] = [
  {
    title: 'Séance 1 par youtube',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magnam, error, hic quasi ratione natus quam nisi ipsa ea explicabo quas. Fugiat laborum tempore, quis unde dolorum modi temporibus error?',
    img: youtubeSeance,
    features: ['caractéristique 1', 'caractéristique 2', 'caractéristique 3', 'caractéristique 4'],
    direction: courseDirectionsDisplay.lrt,
    route: 'https://wa.me/+212645052133?text=je%20suis%20int%C3%A9ress%C3%A9%20%C3%A0%20vous%20rejoindre',
  },
  {
    title: 'Séance 1 par Whatsapp',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magnam, error, hic quasi ratione natus quam nisi ipsa ea explicabo quas. Fugiat laborum tempore, quis unde dolorum modi temporibus error?',
    img: whatsapSeance,
    features: ['caractéristique 1', 'caractéristique 2', 'caractéristique 3'],
    direction: courseDirectionsDisplay.rtl,
    route: 'https://wa.me/+212645052133?text=je%20suis%20int%C3%A9ress%C3%A9%20%C3%A0%20vous%20rejoindre',
  },
  {
    title: 'Séance 1 par Zoom',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magnam, error, hic quasi ratione natus quam nisi ipsa ea explicabo quas. Fugiat laborum tempore, quis unde dolorum modi temporibus error?',
    img: zoomSeance,
    features: ['caractéristique 1', 'caractéristique 2', 'caractéristique 3'],
    direction: courseDirectionsDisplay.lrt,
    route: 'https://wa.me/+212645052133?text=je%20suis%20int%C3%A9ress%C3%A9%20%C3%A0%20vous%20rejoindre',
  },
];
