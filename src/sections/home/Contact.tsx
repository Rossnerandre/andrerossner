import {Box, Container, Typography, Link, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Iconify from "../../components/Iconify";
import FormContact from "./Form/FormContact";

// Links Contatc ---------------------------------------------------------------------
const links = [
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
]

// ----------------------------------------------------------------------

const RootContainer = styled(Container)(() => ({
  marginBottom: '5rem',
  marginTop: '5rem',
}));

const GridItem = styled(Grid)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.secondary.main,
  'a': {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.dark,
    }
  }
}));

// ----------------------------------------------------------------------
export default function Contact() {

  return (
    <RootContainer id={'contact'}>
      <Box
        sx={{color: '#fff', textAlign: 'center'}}
      >
        <Typography variant={'h2'}>Contato</Typography>
        <br/>
        <Typography variant={'h5'}>Bora bater um papo? Pode contatar-me:</Typography>
        <Grid container spacing={3} my={5}>
          {links.map((link) => (
            <GridItem item xs={12} sm={6} md={4} key={link.title}>
              {link.href ? (
                <Link href={link.href
                } target={'_blank'} rel={'noopener noreferrer'}>
                  <Iconify icon={link.icon} sx={{fontSize: '38px', mr: '4px'}}/>
                  {link.title}
                </Link>
              ) : (
                <>
                  <Iconify icon={link.icon} sx={{fontSize: '38px', mr: '4px'}}/>
                  {link.title}
                </>
              )}
            </GridItem>
          ))}
        </Grid>

        <FormContact/>
      </Box>
    </RootContainer>
  );
}