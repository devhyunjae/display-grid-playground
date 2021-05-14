import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  GridItem,
  Container,
  Button,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import "focus-visible/dist/focus-visible";

export const App = () => (
  <ChakraProvider theme={theme}>
    <div style={{ width: "100%", height: "100%" }}>
      <Grid templateRows="82px 1fr 100px" height="100%">
        <Box bg="yellow" position="sticky" top="0" zIndex={1000} fontFamily='monospace'>
          header
        </Box>
        <Container maxW="container.xl" py="30px">
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap="100px 40px"
          >
            <GridItem
              css={{
                border: "1px solid #e9e9e9",
                height: 644,
              }}
            >
              <Button>asdad</Button>
            </GridItem>
            <GridItem
              css={{
                border: "1px solid #e9e9e9",
                height: 644,
              }}
            >
              2
            </GridItem>
            <GridItem
              css={{
                border: "1px solid #e9e9e9",
                height: 644,
              }}
            >
              3
            </GridItem>
            <GridItem
              css={{
                border: "1px solid #e9e9e9",
                height: 644,
              }}
            >
              4
            </GridItem>
            <GridItem
              css={{
                border: "1px solid #e9e9e9",
                height: 644,
              }}
            >
              5
            </GridItem>
            <GridItem
              css={{
                border: "1px solid #e9e9e9",
                height: 644,
              }}
            >
              6
            </GridItem>
          </Grid>
        </Container>
        <Box bg="green.100">footer</Box>
      </Grid>
    </div>
  </ChakraProvider>
);
