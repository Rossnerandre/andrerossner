// @mui
import {styled} from '@mui/material/styles';
import {Container, Typography, Box} from '@mui/material';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  position: 'relative',
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
}));

const FooterBox = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(5),
    }
}));

// ----------------------------------------------------------------------

export default function MainFooter() {

  return (
    <RootStyle>
      <Container sx={{py: 10}}>
        <FooterBox>
          <Logo/>
          <SocialsButton sx={{mx: 0.5}}/>
          <Typography
            component="p"
            variant="body2"
            color={'#fff'}
          >
            © 2022. Todos os Direitos Reservados
          </Typography>
        </FooterBox>
      </Container>
    </RootStyle>
  );
}
