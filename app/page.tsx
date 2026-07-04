import { ServicesBounceDeck } from "./components/ServicesBounceDeck";
import { BusinessSections } from "./components/business-sections";
import { Welcome } from "./welcome";

export default function Home() {
  return <>
    <Welcome />
    <ServicesBounceDeck />
    <BusinessSections />
  </>;
}
