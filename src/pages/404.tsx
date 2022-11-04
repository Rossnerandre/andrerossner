import {motion} from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import {styled} from '@mui/material/styles';
import {Button, Typography, Container, Box} from '@mui/material';
// layouts
import Layout from '../layout';
// components
import Page from '../components/Page';
import {MotionContainer, varBounce} from '../components/animate';
// assets
// import {PageNotFoundIllustration} from '../assets';
import testenotfound from '../assets/PageNotFound.png';
import Image from "next/image";

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({theme}) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

Page404.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="logoOnly">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <Container component={MotionContainer}>
        <ContentStyle sx={{textAlign: 'center', alignItems: 'center'}}>
          <motion.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
              Sorry, page not found!
            </Typography>
          </motion.div>

          <motion.div variants={varBounce().in}>
            <Typography sx={{color: 'text.secondary'}}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check
              your spelling.
            </Typography>
          </motion.div>

          <motion.div variants={varBounce().in}>
            <Box sx={{my: {xs: 5, sm: 10}}}>
              <Image src={testenotfound} alt={'teste'} width={300} height={300}/>
            </Box>
          </motion.div>

          <NextLink href="/" passHref>
            <Button size="large" variant="contained">
              Go to Home
            </Button>
          </NextLink>
        </ContentStyle>
      </Container>
    </Page>
  );
}
