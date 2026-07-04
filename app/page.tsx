import { Fragment } from "react";
import { LaptopHeroOverlay } from "./components/laptop-hero";
import { HomeExperience } from "./home-experience";

export default function Home() {
  return (
    <Fragment>
      <HomeExperience />
      <LaptopHeroOverlay />
    </Fragment>
  );
}
