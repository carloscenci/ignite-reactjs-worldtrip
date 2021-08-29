import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Cities from "../../components/Cities";
import Content from "../../components/Content";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";
import { useRouter } from "next/dist/client/router";
import Loading from "../../components/Loading";


export default function Continent() {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />
  }

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - Europa</title>

        <meta property="og:title" content={`WorldTrip Europa`} />
        <meta property="og:description" content="
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        " />
        <meta name="twitter:title" content={`WorldTrip Europa`} />

        <meta name="twitter:image" content="url(/europe2.png)" />
        <meta name="twitter:image:src" content="url(/europe2.png)" />
        <meta property="og:image" content="url(/europe2.png)" />
        <meta property="og:image:secure_url" content="url(/europe2.png)" />
      </Head>

      <Header />
      <ContinentBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content/>
        <Cities />
      </Flex>
    </Flex>
  )
}
