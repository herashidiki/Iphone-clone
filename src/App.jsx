import Features from "./component/Features";
import Footer from "./component/Footer";
import Hero from "./component/Hero"
import Highlights from "./component/Highlights"
import HowItWorks from "./component/HowItsWork";
import Model from "./component/Model"
import Navbar from "./component/Navbar"

import * as Sentry from "@sentry/react";

function App() {


  return (
<main>




<Navbar />
<Hero/>
<Highlights />
<Model />
<Features />
<HowItWorks />
<Footer />
</main>
  )
}

export default Sentry.withProfiler(App);
