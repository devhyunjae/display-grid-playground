import React from 'react';
import Layout from './Layout';
import {
  Box,
  Grid,
  Container,
} from "@chakra-ui/react";

const Detail = () => {
  return (
    <Layout>
      <Container maxWidth='1370px' py="30px" gridArea="c" px={0}>
        <Grid templateColumns={{
          xs: '1fr',
          sm: '550px 1fr',
        }}  templateRows={{
          xs: 'auto',
          sm: 'repeat(4, 1fr)'
        }}  templateAreas={{
          sm:  `
          'title'
          'detail'
          'chain-info'
          'bid-table'
          'history-table'
        `,
        md: `
        'title title'
          'detail bid-table'
          'chain-info bid-table'
          'history-table history-table'
        `
        }} gridGap="60px 50px">
          <Box gridArea='title' border='1px solid #e9e9e9'>
            <Grid templateColumns={{
              sm: 'auto',
              md: '550px auto'
            }} templateRows={{
              sm: '1fr 1fr',
              md: 'auto'
            }}>
              <img style={{width: '100%', objectFit: 'cover'}} src={'https://ipfs.pixura.io/ipfs/QmeM4btUuRNZZn8cP8vt8zeyae3hxXzZm2D7SPVAJVR98T/world-killer.png'} alt=""/>
              <Box p="40px">
                디테일 자리
              </Box>
            </Grid>
          </Box>
          <Box gridArea='detail' border='1px solid #e9e9e9'>
            detail
          </Box>
          <Box gridArea='chain-info' border='1px solid #e9e9e9'>
            chain-info
          </Box>
          <Box gridArea='bid-table' border='1px solid #e9e9e9'>
            bid-table
          </Box>
          <Box gridArea='history-table' border='1px solid #e9e9e9'>
            history-table
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};


export default Detail;
