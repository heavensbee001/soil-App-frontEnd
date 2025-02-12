import Contacts from "../components/Contacts";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import apiClient from "./api/axios";
//Redux

const getData = () => {
  return () => {
    apiClient({
      data: {
        query: `query{
          characters(page: 1){
            info{
              count
              pages
            }
            results{
              name
              id
              location{
                id
                name
              }
              origin{
                id
                name
              }
              episode{
                id
                episode
                air_date
              }
              image
            }
          }
        }`,
      },
    })
      .then((res) => {
        console.log(res.data.data.characters);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default function Home() {
  return (
    <>
      <Navbar />
      <button onClick={getData()}>Press me</button>
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <Contacts />
      <CTA />
      <Footer />
    </>
  );
}
