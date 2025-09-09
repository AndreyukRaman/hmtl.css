import Header from "@/app/components/Header";
import HeaderContainer from "@/app/components/Header-container";
import Hero from "@/app/components/Hero";
import Hero2 from "@/app/components/Hero2";
import Hero3 from "@/app/components/Hero3";
import Hero4 from "@/app/components/Hero4";
import Hero5 from "@/app/components/Hero5";
import Footer from "@/app/components/Footer";
import {SubscriptionProvider} from "@/app/components/subscriptionContext";

export default function Home() {
  return (
      <>
          <SubscriptionProvider>

          <Header/>
<HeaderContainer/>
          <Hero  title="Watch our Courses" image="pic1.svg" description="Problems trying to resolve the conflict between
the two major realms of Classical physics:
Newtonian mechanics "  firstColumnIsImage={true}/>
          <Hero  title="Every Client Matters" image="pic2.svg" description="Problems trying to resolve the conflict between
the two major realms of Classical physics:
Newtonian mechanics "  firstColumnIsImage={false} videoUrl="https://www.youtube.com/watch?v=sbiQrENxrGI&list=RDsbiQrENxrGI&start_radio=1"/>
          <Hero2/>
          <Hero3/>
          <Hero4/>
          <Hero5/>
          <Footer/>
          </SubscriptionProvider>
      </>


  );
}
