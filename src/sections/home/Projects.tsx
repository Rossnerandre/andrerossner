import {Box, Container, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';
import CardProjects from "../../components/cardProject/CardProjects";

// ----------------------------------------------------------------------
const projects = [
  {
    title: 'Fixar Fotografia',
    description: 'Produção do site Fixar Fotografia, com NextJS, Material UI, Framer Motion, Vercel, Firebase e MercadoPago. Site para pagamento de serviços de fotografia, e gereneciamento dos pagamentos.',
    image: '/assets/home/fixarfotografia.png',
    url: 'https://fixarfotografia.com.br',
  },
  {
    title: 'Projetos em JS',
    description: '20 mini projetos usando, HTML CSS e JS Vanila, Hospedado no Netlify',
    image: '/assets/home/projectsjs.png',
    url: 'https://projectsjs.andrerossner.com',

  },
  {
    title: 'Site Responsivo Flex',
    description: 'Site responsivo com Flexbox, HTML e CSS, Hospedado no Netlify',
    image: '/assets/home/acmeflex.png',
    url: 'https://acmeflex.andrerossner.com',
  },
  {
    title: 'Site Responsivo Grid',
    description: 'Site responsivo com Grid, HTML e CSS, Hospedado no Netlify',
    image: '/assets/home/acmegrid.png',
    url: 'https://acmegrid.andrerossner.com',
  }
]

// ----------------------------------------------------------------------

const RootBox = styled(Box)(() => ({
  background: '#f0f0f0',
  paddingBottom: '7rem',
  paddingTop: '7rem',
}));


// ----------------------------------------------------------------------

export default function Projects() {
  console.log(typeof projects)
  return (
    <RootBox id={'projects'}>
      <Container>
        <Box sx={{mb: 5}} textAlign={'center'}>
          <Typography variant={'h2'} color={'secondary'}>Meus projetos</Typography>
          {/*// @ts-ignore*/}
          <CardProjects projects={projects}/>
        </Box>
      </Container>
    </RootBox>
  )
}
