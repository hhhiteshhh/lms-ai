import { SectionFive } from "./hero_section/SectionFive";
import { SectionFour } from "./hero_section/SectionFour";
import { SectionOne } from "./hero_section/SectionOne";
import { SectionSix } from "./hero_section/SectionSix";
import { SectionThree } from "./hero_section/SectionThree";
import { SectionTwo } from "./hero_section/SectionTwo";

export function HeroSection() {
  return (
    <main className="relative z-10">
      {/* about */}
      <SectionOne />
      {/* pricing */}
      <SectionTwo />
      {/* courses */}
      <SectionThree />
      {/* testimonials */}
      <SectionFour />
      {/*  CTA */}
      <SectionFive />
      {/* footer */}
      <SectionSix />
    </main>
  );
}
