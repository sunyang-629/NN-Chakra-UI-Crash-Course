import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import { Grid, GridItem } from "@chakra-ui/react";

const RootLayout: FC = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={1}
        bg="purple.400"
        minHeight="100vh"
        p="30px"
      >
        <span>sidebar</span>
      </GridItem>
      <GridItem as="main" colSpan={5} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};
export default RootLayout;
