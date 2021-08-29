import { Grid, GridItem } from "@chakra-ui/layout";
import Caracteristic from "./Caracteristic";

export default function Caracteristics() {
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      
    <GridItem>
      <Caracteristic icon="cocktail" text="vida noturna" />
    </GridItem>
    <GridItem>
      <Caracteristic icon="surf" text="praia" />
    </GridItem>
    <GridItem>
      <Caracteristic icon="building" text="moderno" />
    </GridItem>
    <GridItem>
      <Caracteristic icon="museum" text="clássico" />
      </GridItem>
    <GridItem colSpan={[2, 2, 2, 1]}>
      <Caracteristic icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}
