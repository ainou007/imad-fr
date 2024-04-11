import { Guarantee } from '@/lib/types';
import guarantee1 from '../../public/garantir_1.svg';
import guarantee2 from '../../public/garantir_2.svg';
import guarantee3 from '../../public/garantir_3.svg';

export const guarantees: Guarantee[] = [
  {
    title: 'Tu suivras la progression officielle A1, A2, B1, B2',
    description:
      "Je t'ai préparé un programme organisé, avec de la grammaire et du vocabulaire … des activités que tu pourras faire quand tu voudras et où tu voudras, dès que tu auras un petit moment.",
    img: guarantee1,
  },
  {
    title: 'Tu parleras avec confiance',
    description: 'Tu discuteras avec les autres étudiants et avec les professeurs dans des ateliers de conversation conviviaux et motivants.',
    img: guarantee2,
  },
  {
    title: 'Tu comprendras les natifs facilement',
    description:
      "Toutes les activités proposées, de compréhension orale, compréhension écrite, conversation etc. concernent les situations quotidiennes et les situations formelles. Tu comprendras le français standard, le français formel et familier. Ainsi, tu pourras t'adapter à TOUTES les situations.",
    img: guarantee3,
  },
];
