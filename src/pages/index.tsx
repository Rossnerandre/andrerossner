import React from "react";
import {Box, Container} from "@mui/material";
import {styled} from "@mui/system";
import {HomeHero, About} from "../sections/home";
import Layout from "../layout";
import Page from "../components/Page";

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

const ContentStyle = styled('div')(({theme}) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#333',
}));

function Home() {

  return (
    <Page
      title={'André Rossner'}
      meta={<meta name="description" content="My Web Site"/>}
    >
      <HomeHero/>
      <ContentStyle>
        <About/>
      </ContentStyle>
    </Page>
  )
}

export default Home
