import { ReactElement } from 'react';

// ----------------------------------------------------------------------

export type MenuItemProps = {
  title: string;
  path: string;
  icon?: ReactElement;
};

export type MenuProps = {
  isOffset: boolean;
  isHome: boolean;
  navConfig: MenuItemProps[];
};
