
import { FaBookmark } from "react-icons/fa";
import { Bounce,toast } from "react-toastify";
import Hero from "./components/hero";
import Library from "./liberay/library";

// export const color1='#C2F800';

export default function Home() {
  
  return (<>
  <main>
    <Hero/>
    <Library/>
  </main>
    

  </>

  );
}
