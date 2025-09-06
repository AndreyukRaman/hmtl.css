import Header from "@/app/components/Header";
import HeaderContainer from "@/app/components/Header-container";
import Hero from "@/app/components/Hero";
import Hero2 from "@/app/components/Hero2";
import Hero3 from "@/app/components/Hero3";

export default function Home() {
  return (
      <>
          <Header/>
<HeaderContainer/>
          <Hero  title="Watch our Courses" image="pic1.svg" description="Problems trying to resolve the conflict between
the two major realms of Classical physics:
Newtonian mechanics "  firstColumnIsImage={true}/>
          <Hero  title="Every Client Matters" image="pic2.svg" description="Problems trying to resolve the conflict between
the two major realms of Classical physics:
Newtonian mechanics "  firstColumnIsImage={false}/>
          <Hero2/>
          <Hero3/>
      </>


  );
}
