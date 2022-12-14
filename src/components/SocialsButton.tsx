// @mui
import {
  Link,
  Stack,
  Tooltip,
  IconButton,
  ButtonProps,
  IconButtonProps,
} from '@mui/material';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

type IProps = IconButtonProps & ButtonProps;

export default function SocialsButton({sx, ...other}: IProps) {

  const SOCIALS = [
    {
      title: 'Rossnerandre',
      href: 'https://github.com/Rossnerandre',
      icon: 'mdi:github',
    },
    {
      title: 'linkedin.com/in/andrerossner',
      href: 'https://www.linkedin.com/in/andrerossner/',
      icon: 'mdi:linkedin',
    },
    {
      title: '16 98225-4075',
      href: 'https://api.whatsapp.com/send?phone=5516982254075',
      icon: 'ic:baseline-whatsapp',
    },
    {
      title: 'rossnerandre@gmail.com',
      href: 'mailto:rossnerandre@gmail.com',
      icon: 'material-symbols:mail-rounded',
    },
    {
      title: 'Add: Shadaris Vulgo André#2762',
      icon: 'ic:baseline-discord',
    }
  ];

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {SOCIALS.map((social) => {
        const {title, icon, href} = social;
        return (
          <Link key={title} href={href}>
            <Tooltip title={title} placement="top">
              <IconButton
                color="inherit"
                sx={{
                  ...({
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'secondary.main',
                    },
                  }),
                  ...sx,
                }}
                {...other}
              >
                <Iconify icon={icon} sx={{width: 40, height: 40}}/>
              </IconButton>
            </Tooltip>
          </Link>
        )
      })}
    </Stack>
  );
}
