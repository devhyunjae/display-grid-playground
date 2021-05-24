import React from "react";
import Layout from "./Layout";
import {
  Grid,
  GridItem,
  Container,
  Button,
} from "@chakra-ui/react";
import {
  Link
} from 'react-router-dom';


const Card = ({ title }: { title: string }) => (
  <GridItem
    _hover={{
      boxShadow: "0 2px 30px 0 rgba(0, 0, 0, 0.07)",
    }}
    border="1px solid #e9e9e9"
    height="644px"
  >
    {title}
    <Link to='/detail'>
    <Button>
      goto detail page
    </Button>
    </Link>
  </GridItem>
);

const List = () => {
  return (
    <Layout>
      <Container maxW="container.xl" py="30px" gridArea="c">
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap="100px 40px"
        >
          <Card title="1" />
          <Card title="2" />
          <Card title="3" />
          <Card title="4" />
          <Card title="5" />
          <Card title="6" />
          <Card title="7" />
        </Grid>
      </Container>
    </Layout>
  );
};

export default List;
