import Header from "@/app/components/header";
import Topbar from "@/app/components/top-bar";
import Body from "@/app/components/body";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <Header />
      <Topbar />
      <Body />
      <Footer />
    </main>
  );
}
