import News from "../components/sections/News";
import Research from "../components/sections/Research";
import Tum from "../components/sections/Tum";
import Navbar from "../components/layouts/Navbar";
import Discover from "../components/sections/Discover";
import Ground from "../components/sections/Ground";
export default function Home() {
  return (
    <>
      <Navbar />
      <Discover />
      <Tum/>
      <Research/>
      <Ground/>
      <News/>
    </>
  );
}
