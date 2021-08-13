import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/MainBanner";
import Who from "../components/Who";
import Portfolio from "../components/Portfolio";
import AvailPortfolio from "../components/AvailPortfolio";
import {
  getAllEscorts,
  getAllServices,
  getToday,
  getLocals,
} from "../utils/Queries";
import Footer from "../components/_App/Footer";
import Head from "../components/_App/Head";
import AboutSection from "../components/Home/AboutUs";
import Work from "../components/Work";
import WhatWeDo from "../components/Common/WhatWeDo";

const Meta = {
  title: "Late Night Babes Sydney - Private & High Class Sydney Escorts",
  description:
    "LNB Sydney Escorts - Late Night Babes Sydney. Fun, friendly and well reviewed, private & high class escorts in Sydney, Australia. Prices fr. $450 - 5pm to late",
  page: "/",
};

const Index = (props) => {
  return (
    <React.Fragment>
      <Head Meta={Meta} />
      <div className="content">
        <TopHeader />
        <Navbar />
        <MainBanner />
        <Who />
        <div className="avail-section">
          <div className="container-fluid">
            <div className="title-section ptb-100">
              <h2>
                <span className="fun">Availability</span> Sydney escorts
                available today
              </h2>
            </div>
          </div>
          <AvailPortfolio escorts={props.escorts} day={getToday().day} />
        </div>
        <div className="container-fluid">
          <div className="title-section ptb-100">
            <h2>
              <span className="fun">Our Fun and frendly</span> High class Sydney
              escorts
            </h2>
          </div>
        </div>
        <Portfolio escorts={props.escorts} />
        <AboutSection />
        <Work />
        <WhatWeDo />
        <Footer {...props} />
        <div className="main-links">
            <div className="container-fluid">
        <a href="https://www.eurogirlsescort.com" target="_blank" title="EuroGirlsEscort.com"><img src="https://www.eurogirlsescort.com/dist/images/banners/468X60.jpg" alt="EuroGirlsEscort.com" title="EuroGirlsEscort.com" /></a>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export async function getServerSideProps(ctx) {
    const services = await getAllServices();
    const escorts = await getAllEscorts();
    const locs = await getLocals();
  
    // if (!data) {
    //   return {
    //     notFound: true,
    //   }
    // }
  
    return {
      props: { 
          services,
          escorts,
          locs
      }, 
    }
  }


// Index.getServerSideProps = async (ctx) => {
//   const services = await getAllServices();
//   const escorts = await getAllEscorts();
//   const locs = await getLocals();

//   return { escorts: escorts, services: services, locs: locs };
// };

export default Index;
