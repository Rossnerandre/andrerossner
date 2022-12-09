export type CardProjectProps = {
  title: string;
  image: string;
  description: string;
  url: string;
}

export type ProjectsProps = {
  projects: [{
    title: string;
    image: string;
    description: string;
    url: string;
  }];
}

export type ProjectItemProps = {
  title: string;
  image: string;
  description: string;
  url: string;
  fade: 'inDown' | 'inUp';
}