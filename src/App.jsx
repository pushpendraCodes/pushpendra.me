
import { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
const services = [
  "Software",
  "Web App",
  "UI / UX",
  "Mobile App",
  "SaaS",
  "Custom Software",
  "Cloud Solutions",
  "AI Automation",
];

 function App() {
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      document.title = `Pushpendra Patel | ${services[index]}`;
      index = (index + 1) % services.length;
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
   <div className="bg-gradient-to-br from-white via-amber-50 to-amber-100">
     <Navbar />
      <Home />
   </div>
  );
}
export default App;