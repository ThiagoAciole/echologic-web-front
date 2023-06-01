import { Card, Text, Metric, Flex, Button } from "@tremor/react";
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CardMaterial(props) {
  return (
    <Card className="">
      <img src={props.image}alt="" width={300} height={300} className="mb-4 " />
      <Metric>{props.name}</Metric>
      <Flex className="mt-4">
        <Text>
          {props.description}
        </Text>
      </Flex>
      <Link to={`/${props.url}`}>
      <Button className="mt-4 items-center" size="sm" color="green">
        Saiba Mais
      </Button>
      </Link>
     
    </Card>
  );
}