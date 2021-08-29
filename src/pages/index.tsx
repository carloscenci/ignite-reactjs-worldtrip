import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Caracteristics from "../components/Caracteristics";
import Header from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Caracteristics />
    </Flex>
  )
}
