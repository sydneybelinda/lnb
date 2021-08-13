import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import Sidebar from "../../components/Dashboard/SideBar";
import { signIn, signOut, getSession } from "next-auth/client";
import { getAllAgencyEscorts, getUser } from "../../utils/Queries";
import AgencyEscorts from "../../components/Dashboard/AgencyEscorts";

import Footer from "../../components/_App/Footer";

const Dashboard = (props) => {

  const escorts = props.escorts.rows;
  const user = props.user[0];

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
                            <h5>Agency Escorts</h5>
                            <hr />
                            <div className="row">
                              {escorts &&
                                escorts.map((e) => <AgencyEscorts e={e} />)}
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

export async function getServerSideProps(context) {

    const escorts = await getAllAgencyEscorts();
    const user = await getUser();

    return {
      props: { escorts, user },
    };
  }


// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login", // some destination '/dashboard' Ex,
//         permanent: false,
//       },
//     };
//   } else {
//     const username = session.user.name;

//     const user = await getUser(username);

//     const agency = await getAgency(username);
//     const escorts = await getAllEscorts(username);

//     return {
//       props: { session, user, agency, escorts },
//     };
//   }
// }

export default Dashboard;
