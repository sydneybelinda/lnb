import React, {useState, useEffect } from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import Sidebar from "../../components/Dashboard/SideBar";
import { Button} from 'react-bootstrap';
import { signIn, signOut, getSession } from "next-auth/client";
import { getAllAgencyEscorts, getUser, getAllLinks } from "../../utils/Queries";
import SiteLink from "../../components/Dashboard/SiteLink";
import LModal from "../../components/Dashboard/LModal"
import withSession from '../../lib/session'

import Footer from "../../components/_App/Footer";

const Dashboard = (props) => {

    const [modalShow, setModalShow] = useState(false);

    const [links, setLinks] = useState(props.links);


  const user = props.user[0];


  const addLink = () => {
      const heading = "Add New Link"
   setModalShow(true)
  }

  const getLinks = async () => {
    const l = await getAllLinks();
    setLinks(l)

  }
 
  return (
    <React.Fragment>
      <div className="content">
        <TopHeader />
        <Navbar />

        <div className="dashboard-area ptb-100">
          <div className="container-fluid">
            <div className="row ex">
              <div className="col-md-12">
                <section className="ps-my-account ps-page--account">
                  <div className="row">
                    <Sidebar  user={user} />
                    <div className="col-lg-9">
                      <div className="ps-page__content">

                            <h3>Manage Links</h3> 
                            <hr />
                            <div className="notices">
                              Use this page to manage Website links page
                              <br />

                            </div>
                            <h5>Links  <span className="addnewlink"><Button className="add" size="sm" onClick={() => addLink()}>add</Button></span></h5>
                            <hr />
                            <div className="row">
                                {links && 
                                links.map((link) => <SiteLink link={link} key={link.id} getlinks={() => getLinks()} />)
                                }
                              {/* {escorts &&
                                escorts.map((e) => <AgencyEscorts e={e} />)} */}
                            </div>
                            <LModal
        show={modalShow}
        onHide={() => setModalShow(false)}
       getlinks={() => getLinks()}

      />
                        
                      </div>
                    </div>
                  </div>
                </section>
                {/* <AgencyInfo /> */}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};




  export const getServerSideProps = withSession(async function ({ req, res }) {
    const user = req.session.get('user')
  
    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }
  
      const escorts = await getAllAgencyEscorts();
      const links = await getAllLinks();
  
  
      return {
        props: { links, user: req.session.get('user') },
      };
    })
  
  



export default Dashboard;
