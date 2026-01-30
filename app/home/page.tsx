import ExampleApplications from "../components/ExampleApplications";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import KeyCharacteristics from "../components/KeyCharacteristics";
import Products from "../components/Products";


export default function HomePage() {
  return (
   <div>
        <Hero/>
        <KeyCharacteristics/>
        <ExampleApplications/>
        <Products/>
        <Footer/>
   </div>
  );
}
