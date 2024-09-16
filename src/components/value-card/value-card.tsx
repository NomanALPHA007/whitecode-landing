import {Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

const ValueCard = ({ title, description } : {title: string, description: string}) => {
  return (
    <Card className="w-[500px] max-md:w-[80vw]" shadow="lg" >
      <CardHeader >
        <p className="font-montserrat text-xl md:text-2xl lg:text-4xl tracking-wider text-primary">{title}</p>
      </CardHeader>
      <Divider />
      <CardBody >
        <p className="font-palanquin text-base lg:text-lg">{description}</p>
      </CardBody>
    </Card>
  )
}

export default ValueCard