import { Card, Text, Metric, Flex, Button } from "@tremor/react";
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CardMaterial(props) {
  return (
    <Card className="">
      <img src="https://i.pinimg.com/originals/8f/08/25/8f08250fcaa73d33c502e42236f1b53a.jpg" alt="" className="mb-4" />
      <Metric>{props.name}</Metric>
      <Flex className="mt-4">
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        </Text>
      </Flex>
      <Link to={`/${props.url}`}>
      <Button className="mt-4 items-center" size="sm">
        Saiba Mais
      </Button>
      </Link>
     
    </Card>
  );
}