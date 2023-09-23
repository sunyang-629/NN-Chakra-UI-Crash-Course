import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const tasks = useLoaderData() as ITaskDto[];
  console.log({ tasks });
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks.map((task) => (
        <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
          <CardHeader>
            <Flex gap={5}>
              <Box w="50px" h="50px">
                <Avatar src={task.img} />
              </Box>
              <Box>
                <Heading as="h3" size="sm">
                  {task.title}
                </Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gery.500">
            <Text>{task.description}</Text>
          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>
                Watch
              </Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>
                Comment
              </Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default DashboardPage;

export const TasksLoader: LoaderFunction = async () => {
  const res = await axios.get<ITaskDto[]>("http://localhost:3500/tasks");
  return res.data;
};
