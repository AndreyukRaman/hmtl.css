import Header from "@/app/components/Header";
import HeaderContainer from "@/app/components/Header-container";

export default function Home() {
  return (
      <div className=" min-h-screen bg-[url('/background.svg')] bg-cover bg-center ">
          <Header/>
      <main >
<HeaderContainer/>
      </main>
      </div>
  );
}
