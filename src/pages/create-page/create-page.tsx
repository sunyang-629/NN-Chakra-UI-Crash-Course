import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import { ActionFunction, Form, redirect } from "react-router-dom";

const CreatePage: FC = () => {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="task" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task description</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for the task..."
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="purple" />
          <FormLabel mb="0" ml="10px">
            Make this a priority task.{" "}
          </FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
};

export default CreatePage;

export const CreateAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log({ task });

  return redirect("/");
};
