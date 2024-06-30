import youtubeSeance from '../../public/session_1.svg';
import whatsapSeance from '../../public/session_2.svg';
import zoomSeance from '../../public/session_3.svg';
import { CourseProgam, courseDirectionsDisplay } from '@/lib/types';

export const coursProgram: CourseProgam[] = [
  {
    title: 'Séance 1 par youtube',
    description:
      'Plongez dans des leçons captivantes et détaillées grâce à nos vidéos pédagogiques sur YouTube. Chaque semaine, découvrez de nouveaux concepts linguistiques et culturels, expliqués de manière claire et accessible. Apprenez à votre rythme, depuis le confort de votre domicile.',
    img: youtubeSeance,
    features: ['caractéristique 1', 'caractéristique 2', 'caractéristique 3', 'caractéristique 4'],
    direction: courseDirectionsDisplay.lrt,
    route: 'https://wa.me/+212645052133?text=je%20suis%20int%C3%A9ress%C3%A9%20%C3%A0%20vous%20rejoindre',
  },
  {
    title: 'Séance 2 par Whatsapp',
    description:
      "Mettez en pratique ce que vous avez appris en interagissant directement avec votre professeur et d'autres étudiants via WhatsApp. Cette séance est dédiée à l'application concrète des notions vues en vidéo, à travers des exercices, des discussions et des échanges personnalisés.",
    img: whatsapSeance,
    features: ['caractéristique 1', 'caractéristique 2', 'caractéristique 3'],
    direction: courseDirectionsDisplay.rtl,
    route: 'https://wa.me/+212645052133?text=je%20suis%20int%C3%A9ress%C3%A9%20%C3%A0%20vous%20rejoindre',
  },
  {
    title: 'Séance 3 par Zoom',
    description:
      "Améliorez votre communication en participant à nos sessions en direct sur Zoom. Profitez d'un environnement interactif pour poser des questions, recevoir des corrections instantanées et pratiquer la conversation en temps réel. Cette séance est essentielle pour renforcer votre fluidité et votre confiance en français.",
    img: zoomSeance,
    features: ['caractéristique 1', 'caractéristique 2', 'caractéristique 3'],
    direction: courseDirectionsDisplay.lrt,
    route: 'https://wa.me/+212645052133?text=je%20suis%20int%C3%A9ress%C3%A9%20%C3%A0%20vous%20rejoindre',
  },
];
