import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import {styled} from "@mui/system";
import Image from "next/image";

const TesteBox = styled(Box)(() => ({
  // backgroundColor: theme.palette.background.default,
  // position: 'relative',
  // zIndex: '10 !important',
}));

const FormTop = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.secondary.dark,
  position: 'absolute',
  width: '350px',
  height: '300px',
  top: 0,
  right: 0,
  clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 31% 68%)',
  zIndex: '2',
}));

const ImageStyled = styled(Image)(() => ({
  borderRadius: '18px',
}));


export default function About() {
  return (
    <TesteBox>
      <FormTop/>
      <Container id={'about'} sx={{background: '#333', zIndex: '12', position: 'relative', marginBottom: '5rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{mt: 5, mb: 3}} p={0} textAlign={'center'} display={'flex'} justifyContent={'center'}
                height={'80px'}>
            <Typography variant={'h2'} color={'secondary'}>About me</Typography>
          </Grid>
          <Grid item xs={12} md={6} alignItems={'center'} display={'flex'} flexDirection={'column'}
                justifyContent={'center'}
                sx={{mt: {xs: 10, md: 0}}}
          >
            <ImageStyled
              src={'/assets/home/me.jpeg'} alt={'Me André Rossner'} width={300}
              height={400}/>
          </Grid>
          <Grid item xs={12} md={6} alignItems={'center'} display={'flex'} flexDirection={'column'}
                justifyContent={'center'}
          >
            <Box color={'white'} component={Paper} elevation={5} bgcolor={'#333'} p={3}>
              Hello my name is André Rossner.
              Graduated in Systems Analysis and Development, working as a FrontEnd Developer, mainly with NEXTJS,
              TypeScript, API&apos;s, MySQL, among other web development languages.
              I am very curious about technology, I like sharing ideas and
              knowledge, I am always interested in learning more. I try to adapt to the needs of the
              company, and do my best. I am currently working on English to be fluent.
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TesteBox>
  )
}