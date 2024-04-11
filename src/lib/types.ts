export type NavLink = {
  label: string;
  route: string;
};

export type Article = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export enum courseDirectionsDisplay {
  rtl,
  lrt,
}
export type CourseProgam = {
  title: string;
  description: string;
  img: any;
  features: string[];
  direction: courseDirectionsDisplay;
  route: string;
};

export type Guarantee = {
  title: string;
  description: string;
  img: any;
};
