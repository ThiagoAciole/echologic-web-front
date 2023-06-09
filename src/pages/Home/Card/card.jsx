import {  Text, Metric, Flex, Button } from "@tremor/react";
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Cardt(props) {
  return (
   
    <div className="border p-6 rounded-lg content-between shadow h-auto flex flex-col items-center">
  <img src={props.image} alt="" className="mb-4 w-60" />
  <div className="flex flex-col items-center justify-between flex-grow">
    <div className="flex-grow">
    </div>
    <Metric className="text-center">{props.name}</Metric>
    <Flex className="mt-4">
      <Text>{props.description}</Text>
    </Flex>
    <div>
    {props.url !== "" ?
    <Link to={`/${props.url}`}>
    <Button className="mt-4 items-center" size="sm" color="green">
      Saiba Mais
    </Button>
    </Link> :
    <a href={props.link} target="_blank" rel="noopener noreferrer">
    <Button className="mt-4 items-center" size="sm" color="green">
      Saiba Mais
    </Button>
    </a>
}

    </div>
  </div>
</div>
  );
}