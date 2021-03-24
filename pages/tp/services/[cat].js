import React from 'react';
import TopHeader from '../../../components/_App/TopHeader';
import Navbar from '../../../components/_App/Navbar';
import ServicesPortfolio from "../../../components/ServicesPortfolio"
import {getAllEscorts, getServicesSeo, getAllServices, getLocals} from "../../../utils/Queries"; 
import Footer from '../../../components/_App/Footer';
import Head from '../../../components/_App/Head';
import nl2br from 'react-nl2br'



const Escorts = (props) => {
   
    const seo = props.seo;
    const title = `${seo.keyword1} | Late Night Babes Sydney`;
    const url = `/tp/services/${seo.keyindex}`;
    const description = `${seo.keydesc.substr(0,157)}...`;


    const Meta = {
        title: title,
        description: description,
        page: url
    }
    

    return (
        <React.Fragment>
            <Head Meta={Meta}/>
            <div className="content">
            <TopHeader />
            <Navbar  />

            <div className="title-section ptb-100 bg-black text-center">
            <h1><span className="fun">{seo.keyword2}</span> {seo.keyword1}</h1>
            <div className="shape16">
                <img src="/images/shape/shape16.png" alt="image" />
            </div>
            </div>
            <ServicesPortfolio escorts={props.escorts} seo={props.seo} />
            <div className="desc pt-50 pb-50">
                <div className="container-fluid">
                <h2 className="text-center pb-30">{seo.keyword2}</h2>
                <p>
                {nl2br(seo.keydesc)}
                </p>
                </div>
            </div>
            <Footer {...props} />
            </div>
        </React.Fragment>
    )
}


Escorts.getInitialProps = async (ctx) => {
    const { query } = ctx;
    const cat = query.cat;

  const seo = await getServicesSeo(cat);
  
    const escorts = await getAllEscorts();

    const services = await getAllServices();
    const locs = await getLocals();
   
    return { escorts: escorts, seo: seo, services: services, locs:locs };
  };

export default Escorts;

