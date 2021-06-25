import React from "react";
import "./style.css";
import Profilepic from "../../img/profilepic.jpg";
import NavBar from "../Navbar";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Favorite
 **/

const Favorite = (props) => {

  return (
    <>
      <NavBar />
      {/* ProfileHEader  starts*/}
      <main className="SCxLW o64aR " role="main" style={{ paddingTop: "55px" }}>
        <div className="olokol">
          <div className="lkjhg">
          
            <section className="olkuhg">
              <section className="jokmhg">
                <section className="cfvdstyb">
                  <img alt="Profile Pic" className="lhdatvoy" src={Profilepic} />
                </section>
              </section>
              <section className="jokmhg">
                <section className="cfvdstyb">
                  <img alt="Profile Pic" className="lhdatvoy" src={Profilepic} />
                </section>
              </section>
              <section className="jokmhg">
                <section className="cfvdstyb">
                  <img alt="Profile Pic" className="lhdatvoy" src={Profilepic} />
                </section>
              </section>
              <section className="jokmhg">
                <section className="cfvdstyb">
                  <img alt="Profile Pic" className="lhdatvoy" src={Profilepic} />
                </section>
              </section>
              <section className="jokmhg">
                <section className="cfvdstyb">
                  <img alt="Profile Pic" className="lhdatvoy" src={Profilepic} />
                </section>
              </section>
              <section className="jokmhg">
                <section className="cfvdstyb">
                  <img alt="Profile Pic" className="lhdatvoy" src={Profilepic} />
                </section>
              </section>
            </section>
            </div>
            </div>
      </main>

      <div className="Profile-tabs-DeN Profile-transitionBackwards-1fh" style={{padding:'30px'}}>
                      <div className="Profile-tab-3cJ">
                        <div>
                          {/* !----- */}
                          <div className="e2e-Work">
                            {/* !----- */}
                            <div class>
                              <div className="ContentGrid-grid-21i">
                           
                                  <div
                                    className="ProjectCoverNeue-root-166 ContentGrid-gridItem-WHz"
                                
                                  >
                                    <div className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-loaded-26R">
                                      <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                                        <div className="Cover-content-2R2">
                                          <div
                                            className="DominantColor-dominantColor-2PM"
                                            style={{
                                              backgroundColor:
                                                "rgb(237, 238, 237)",
                                            }}
                                          ></div>
                                          <Link
                                        
                                          >
                                            <img
                                              sizes="404px"
                                              style={{
                                                objectFit: "contain",
                                                padding: "10px",
                                              }}
                                              src={
                                                 "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                                              }
                                              alt="Musee"
                                              className="ProjectCoverNeue-image-1MZ js-cover-image"
                                            ></img>
                                          </Link>
                                        </div>
                                        <div className="Cover-overlay-28e Cover-showOnHover-Ks- Cover-transitionDone-22y"></div>
                                      </div>
                                    </div>
                                  </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    </>
  );
};

export default Favorite;

