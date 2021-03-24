import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import EscortDetails from "../../components//EsccortDetails";
import Footer from "../../components/_App/Footer";
import Head from "../../components/_App/Head";
import {getEscort, getServices, getAllServices, getLocals} from "../../utils/Queries";



const Escort = (props) => {
const e = props.escort[0]

  const Meta = {
    title: `${e.firstName} ${e.surname} - High Class Escort  | Late Night Babes Sydney`,
    description:`${e.location} escort - ${e.firstName} ${e.surname} | ${e.age} year old | ${e.hair} escort | ${e.eyes}-eyed escort | Size ${e.dressSize} | ${e.cup} Cup Breasts`,
    page: `/escort/${e.username}`,
  };
   
  return (
    <React.Fragment>
      <Head Meta={Meta} />
      <div className="content">
        <TopHeader />
        <Navbar />
        <EscortDetails escort={props.escort} {...props} />
        <Footer services={props.s} locs={props.locs} />
      </div>
    </React.Fragment>
  );
};

Escort.getInitialProps = async (ctx) => {
    const { query } = ctx;
    const username = query.username;

  const escort = await getEscort(username);
  const services = await getServices();
  const s = await getAllServices();
  const locs = await getLocals();

  return { escort: escort, services:services, s:s, locs:locs };
};

export default Escort;

