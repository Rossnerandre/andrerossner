// routes
import {PATH_PAGE} from '../../routes/paths';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'mdi:home'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Sobre',
    icon: <Iconify icon={'simple-icons:aboutdotme'} {...ICON_SIZE} />,
    path: PATH_PAGE.about,
  },
  {
    title: 'Projetos',
    icon: <Iconify icon={'entypo:lab-flask'} {...ICON_SIZE} />,
    path: PATH_PAGE.projects,
  },
  {
    title: 'Contato',
    path: PATH_PAGE.contact,
    icon: <Iconify icon={'mdi:phone'} {...ICON_SIZE} />,
  },
];

export default menuConfig;
