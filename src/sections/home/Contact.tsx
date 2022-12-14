import {Box, Button, Container} from "@mui/material";
import {styled} from "@mui/material/styles";

const RootContainer = styled(Container)(() => ({
  // background: '#333',
  marginBottom: '5rem',
  marginTop: '5rem',
}));

export default function Contact() {

  const testSendMail = () => {
    fetch('/api/contactForm').then((response) => {
      console.log(response);
    });
  }


  return (
    <RootContainer id={'contact'}>
      <Box sx={{color: '#fff'}} p={5}>

        <Button onClick={() => testSendMail()}>Teste</Button>


      </Box>
    </RootContainer>
  )
}