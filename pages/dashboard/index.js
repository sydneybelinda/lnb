import React, {useState} from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import Sidebar from "../../components/Dashboard/SideBar";
import { getAllAgencyEscorts, getUser } from "../../utils/Queries";
import AgencyEscorts from "../../components/Dashboard/AgencyEscorts";
import withSession from '../../lib/session'
import PropTypes from 'prop-types'

import Footer from "../../components/_App/Footer";


const Dashboard = (props) => {

  const esc = props.escorts.rows;
  const user = props.user[0];

  const [escorts, setEscorts] = useState(esc);




  const getEscorts = async () => {

    const es = await getAllAgencyEscorts()

    setEscorts(es.rows)


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

                            <h3>Agency Dashboard</h3>
                            <hr />
                            <div className="notices">
                              This is your central point for all related
                              settings and configuration. Use this panel to
                              create/edit your public EscortGem agency profile,
                              Create/Edit Agency escorts, manage escort tours
                              and manage your account and settings.
                              <br />
                              <br />
                              Tip. Start by creating your public agency profile.
                              <br />
                              <br />
                              Keep checking this space new exciting things are
                              being added all the time!
                            </div>
                            <h5>Agency Escorts <span className="addnewescort"><a href="/dashboard/editescort">add new</a></span></h5>
                            <hr />
                            <div className="row">
                              {escorts &&
                                escorts.map((e) => <AgencyEscorts e={e} key={e.id} getall={() => getEscorts()} />)}
                            </div>

                        
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


    return {
      props: { escorts, user: req.session.get('user') },
    };
  })



export default Dashboard;
