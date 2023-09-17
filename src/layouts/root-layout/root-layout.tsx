import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar/sidebar";

const RootLayout: FC = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="purple.400"
        minHeight={{ lg: "100vh" }}
        p="30px"
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};
export default RootLayout;
