import {
  Box,
  Grid,
} from "@chakra-ui/react";
import React from 'react';

const Layout = ({children}: {children: React.ReactElement | string}) => {
  return (
    <Box width='100%' height='100%'>
      <Grid templateRows="82px 1fr 100px" height="100%" templateAreas={`
        'h'
        'c'
        'f'
      `}
      >
        <Box bg="yellow" position="sticky" top="0" zIndex={1000} gridArea='h'>
          header
        </Box>
        {children}
        <Box bg="green.100" gridArea='f'>footer</Box>
      </Grid>
    </Box>
  );
};

export default Layout;
