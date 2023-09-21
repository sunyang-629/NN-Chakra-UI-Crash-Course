import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { FC } from "react";

const ProfilePage: FC = () => {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, autem.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              cumque nisi nostrum tenetur laborum.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              cumque nisi nostrum tenetur laborum.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              cumque.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              cumque nisi nostrum tenetur laborum.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfilePage;
