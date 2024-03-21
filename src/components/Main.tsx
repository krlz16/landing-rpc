import SectionArticles from "./main/SectionArticles";
import SectionCode from "./main/SectionCode";
import SectionCommunity from "./main/SectionCommunity";
import SectionHero from "./main/SectionHero"
import SectionHowItWork from "./main/SectionHowItWork";

function Main() {
  return (
    <>
      <SectionHero />
      <SectionArticles section="section1" />
      <SectionHowItWork />
      <SectionCode />
      <SectionCommunity />
      <SectionArticles section="section2" />
    </>
  )
}

export default Main
