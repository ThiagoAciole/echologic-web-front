import { Card, Text, Metric, Flex, Button } from "@tremor/react";

export default function CardMaterial() {
    return (
    <Card className=" justify-center">
    <img src="https://i.pinimg.com/originals/8f/08/25/8f08250fcaa73d33c502e42236f1b53a.jpg" alt="" className="mb-4" />
    <Metric>Material</Metric>
    <Flex className="mt-4">
      <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type</Text>

    </Flex>
    <Button className="mt-4 itens-center" size="sm" onClick={() => console.log("clicked")}>
      Saiba Mais
    </Button>
  </Card>
);
}