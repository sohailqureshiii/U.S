import React, { useState } from "react";
import "./style.css";
import Profilepic from "../../img/profilepic.jpg";
import NavBar from "../Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductModal from "../../components/ProductModal";
import Store from "../../components/Store";

/**
 * @author
 * @function Favorite
 **/

const Favorite = (props) => {
  const store = useSelector((state) => state.store);
  const followingStores = useSelector((state) => state.user.followingStores);
  const followingProducts = useSelector(
    (state) => state.user.followingProducts
  );
  const auth = useSelector((state) => state.auth.authenticate);
  const [show, setShow] = useState(false);
  const [productDetails, setProductDetails] = useState("");
  const handleShow = (product) => {
    setProductDetails(product);
    setShow(true);
  };


  const renderStores = () =>{
    return(
      <div style={{ padding: "30px", paddingTop: "30px" }}>
     <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
     {
       store.stores.map((store,index)=>(
         <Store store={store} index={index} />
       ))
     }

     </div>
     </div>
    );
  }

  return (
    <>
      <NavBar />
      {/* ProfileHEader  starts*/}
      {/* <main className="SCxLW o64aR " role="main" style={{ paddingTop: "55px" }}>
        <div className="olokol">
          <div className="lkjhg">
            <section className="olkuhg">
              {auth && followingStores.length > 0
                ? followingStores.map((store, index) => (
                    <Link
                      className="jokmhg"
                      key={index}
                      to={`/${store._id}/store`}
                    >
                      <section className="cfvdstyb">
                        <img
                          alt="Profile Pic"
                          className="lhdatvoy"
                          src={Profilepic}
                        />
                      </section>
                      <div>
                      <h1 className="shopnameinfav">{store.shopName}</h1>
                      </div>
                    </Link>
                  ))
                : null}
            </section>
          </div>
        </div>
      </main> */}
      <div
      className="follow-store-profile" style={{ paddingTop: "55px" }}
      >
      <div className="inside-div-of-pro">
        <div className="lkjh-bdbdh">
          <div className="olkbgh-pldhdy">
          {auth && followingStores.length > 0
                ? followingStores.map((store, index) => (
                    <Link
                      className="jokmhg"
                      key={index}
                      to={`/${store._id}/store`}
                    >
                      <section className="cfvdstyb">
                        <img
                          alt="Profile Pic"
                          className="lhdatvoy"
                          src={Profilepic}
                        />
                      </section>
                      <div>
                      <h1 className="shopnameinfav">{store.shopName}</h1>
                      </div>
                    </Link>
                  ))
                : null}
          </div>
        </div>
      </div>
      </div>
      {/* ProfileHEader  ends*/}

      {/* ////// Following Products Starts ////// */}

      <div style={{ padding: "30px" }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
        {auth && followingProducts.length > 0
              ? followingProducts.map((product, index) => (
              <div key={product._id} style={{border: '1px solid #d4d4d4', borderRadius: '6px'}}>
                <Link
                 onClick={() => handleShow(product)}
                  key={product._id}
                >
                  <div className="Galleries-gridCover-j9D">
                    <div className="ProjectCoverNeue-root-166 ProjectCoverNeue-statsVisible-19j ProjectCover-cover-3zh">
                      <div className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-statsVisible-19j ProjectCoverNeue-loaded-26R">
                        <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                          <div className="Cover-content-2R2">
                            <div className="DominantColor-dominantColor-2PM"></div>
                            <img
                              sizes="404px"
                              style={{ padding: "10px" }}
                              src='https://images-eu.ssl-images-amazon.com/images/I/41vqgX0c5EL._SX300_SY300_QL70_FMwebp_.jpg'
                              alt="Children's Day - ''SEE ME&quot;"
                              loading="lazy"
                              class="ProjectCoverNeue-image-1MZ js-cover-image"
                            ></img>
                            <div className="ProjectCoverNeue-controlsAndPrivacyContainer-20r"></div>
                          </div>
                        </div>
                      </div>
                      {/* /////// */}
                      <div style={{ padding: "10px" }}>
                        <div className="Cover-overlay-28e Cover-showOnHover-Ks- Cover-transitionDone-22y">
                          <div className="ProjectCoverNeue-details-yQ_">
                            <div className="ProjectCoverNeue-info-4Ul">
                              <a className="Title-title-3nk e2e-Title-owner js-project-cover-title-link">
                                {product.name}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="ProjectCoverNeue-visibleStatsAndOwners-2Av">
                          <span className="ProjectCoverNeue-ownersContainer-3Go">
                            <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                              <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                                <a className="Owners-owner-2lB e2e-Owner-user-link">
                                  {product.name}
                                </a>
                              </span>
                            </div>
                          </span>
                          <div className="Stats-stats-1iI">
                            <div className="Product__priceFlex">
                              <div
                                className="Owners-owner-2lB e2e-Owner-user-link" style={{marginBottom:'20px'}}
                                onClick={() => handleShow(product)}
                              >
                                View Details
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="ProjectCoverNeue-ownersContainer-3Go">
                          <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                            <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                              <a className="Owners-owner-2lB e2e-Owner-user-link">
                                By -{product.createdBy.shopName}
                              </a>
                            </span>
                          </div>
                        </span>
                      </div>
                      {/* ///////// */}
                    </div>
                  </div>
                </Link>
              </div>
            )):renderStores()}
        </div>
      </div>
          {/* ////// Following Products ends ////// */}

      <ProductModal
        show={show}
        handleclose={() => setShow(false)}
        productDetails={productDetails}
      />
    </>
  );
};

export default Favorite;
