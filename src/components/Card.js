import { Heading, HStack, Image, Text, VStack, Card, CardBody, Stack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card maxW="sm">
        <CardBody backgroundColor='white'>
            <Image src={imageSrc} maxWidth='100%' borderRadius='lg' />
            <Stack mt='6' spacing='3' padding='10px'>
                <Heading size='md' color='black'>{title}</Heading>
                <Text color='black'>{description}</Text>
                <FontAwesomeIcon icon={faArrowRight} size="1x" />
                </Stack>           
        </CardBody>
    </Card>
  );
};

export default Cards;
