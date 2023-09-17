import { Container, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

const DashboardPage: FC = () => {
  return (
    <Container>
      <Heading my="30px" p="10px">
        Chakra UI Components
      </Heading>
      <Text color="blue.300" fontWeight="bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex mollitia
        blanditiis repellendus aliquam dignissimos tenetur sit provident! Omnis
        eum nostrum inventore corporis quo maxime praesentium, obcaecati, vitae
        commodi error eaque.
      </Text>
    </Container>
  );
};

export default DashboardPage;
