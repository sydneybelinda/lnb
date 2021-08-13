import React from "react";
import TopHeader from "../../../components/_App/TopHeader";
import Navbar from "../../../components/_App/Navbar";
import EscortProfileForm from "../../../components/Dashboard/Escort/EscortProfileForm";
import Sidebar from "../../../components/Dashboard/SideBar";
import { signIn, signOut, getSession } from "next-auth/client";
import { getUser, getSelect, getServices, getEscort, getCities} from "../../../utils/Queries";

import Footer from "../../../components/_App/Footer";

const NewProfile = (props) => {

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
                    <Sidebar user={user} />
                    <div className="col-lg-9">
                      <div className="ps-page__content">
                    {props.escort ?<h3>Edit Escort Profile</h3> :  <h3>Create Escort Profile</h3>}
                          <hr />
                        <div className="ps-form__header">

                        </div>
                   <div className="notices">
                   Complete this wizard to create and publish your public escort profile.
                   <br/> <br/>
                   It is recommended that you do not use your real identity as this information is available publicly. Enter the details of your public escort persona.
                        </div>
                        <EscortProfileForm user={user} cities={props.cities}  escort={props.escort} selects={props.selects} services={props.services} />
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
 // const session = await getSession(context);
  const eusername = context.params.username;

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login", // some destination '/dashboard' Ex,
  //       permanent: false,
  //     },
  //   };
  // } else {
   // const username = session.user.name;

   const username = "lnbsydney"

   const user = "lnbsydney"

   // const user = await getUser(username);
   // const agency = await getAgency(username);
    const cities = await getCities()
    const services = await getServices()
    const escort = await getEscort(eusername)




    const selectNationalities = await getSelect("select_nationalities");
    const selectHair = await getSelect("select_hair");
    const selectEyes = await getSelect("select_eyes");
    const selectHeight = await getSelect("select_height");
    const selectDressSize = await getSelect("select_dresssize");
    const selectSexualPreference = await getSelect("select_sexualpreference");
    const selectBust = await getSelect("select_bust");
    const selectChestBustHips = await getSelect("select_chest_bust_hips");
    const selectLanguages = await getSelect("select_language");
    const selectLevels = await getSelect("select_level");

    const selectAge = []

    let i=0;
    for(i=18; i<100; i++){
      selectAge.push(i)
    }

    const selects= {
      nationalities: selectNationalities,
      hair: selectHair,
      eyes: selectEyes,
      height: selectHeight,
      age: selectAge,
      dresssize: selectDressSize,
      sexualorientation: selectSexualPreference,
      bust: selectBust,
      chest: selectChestBustHips,
      languages: selectLanguages,
      levels: selectLevels
    }

    return { 
      props: { 
        //session,
        cities,
              user, 
              selects,
              services,
              escort,
            },
    };
  }
//}

export default NewProfile;
