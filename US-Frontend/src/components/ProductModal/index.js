import React, { useState } from "react";
import { MaterialButton, Modal } from "../../components/MaterialUI";
import { addToCart } from "../../actions/cart.action";
import { BiRupee } from "react-icons/bi";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import { useDispatch, useSelector } from "react-redux";
import Signin from "../Signin";



const ProductModal = (props) => {

  const dispatch = useDispatch();
  const auth = useSelector(state=>state.auth.authenticate)
  const [showLoginModal,setShowLoginModal] = useState(false);


  const {productDetails,show,handleclose} = props
  if (!productDetails) {
        return null;
      }





   

    const followStore = (storeId) =>{
      // if(auth){
      //   console.log("sdfds");
      // }else{
      //   setShowLoginModal(true);
      //   // Signin();
      //   handleclose(false)
      //   // console.log(showLoginModal);
       
      // }
    }

    // const SigninModal = () =>{
           
 
     
      
    // }
    return(
      <>
        <Modal
        visible={show}
        onClose={handleclose}
        size="lg"
      >
        <div className="productDescriptionContainer">
          <div className="flexRow">
            <div className="productDescContainer">
              <div className="productDescImgContainer">
                <img
                   src= "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                  alt="new"
                />
              </div>

              {/* action buttons */}
            </div>
          </div>
          <div className=" detailsWrapper">
            <div className="prodDesc clearfix">
              <div className="productDetails" style={{ width: "600px" }}>
                <div>
                  <div className="Storename" style={{ maxWidth: "521px",top:'-1px' }}>
                    <p>Mi Store
                    {
                      auth ? <button 
                    style={{marginLeft:'250px'}} 
                    className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
                    onClick = { ()=>{
                      followStore(productDetails.createdBy._id) 
                    }
                   
                     

                    }
                    >
                    Follow Store
                    </button> 
                    : 
                    <button 
                    style={{marginLeft:'250px'}} 
                    className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
                    onClick = { ()=>{
                       setShowLoginModal(true)
                       handleclose(false)
                    }
                   
                     

                    }
                    >
                    Follow Store
                    </button>
                    }
                    
                    </p>
                    <p  style={{
                        width: "130px",
                        fontSize: "12px",
                        color: "#878787",
                        fontWeight: "600",
                        marginRight: "20px",
                      }}>
                      Viman Nagar Pune
                </p>
                  </div>
                </div>
                <p className="productTitle" style={{ maxWidth: "500px" }}>
                  {productDetails.name}
                </p>
                <div>{/* //// */}</div>
                <div className="extraOffer">{/* //// */}</div>
                <div className="flexRow priceContainer">
                  <span className="price">
                    <BiRupee />
                    {productDetails.price}
                  </span>

    
                </div>
                <div>
                  <p style={{ display: "flex", maxWidth: "500px" }}>
                    <span
                      style={{
                        width: "100px",
                        fontSize: "12px",
                        color: "#878787",
                        fontWeight: "600",
                        marginRight: "20px",
                      }}
                    >
                      Description
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#212121",
                      }}
                    >
                      {productDetails.description}
                    </span>
                  </p>
                  <div className="share-btn-container">
                    <WhatsappShareButton
                      title={productDetails.name}
                      separator=" "
                    //   url={currentUrl}
                    >
                      <WhatsappIcon
                        logoFillColor="green"
                        round={true}
                        title={productDetails.name}
                        separator=" "
                        // url={currentUrl}
                      ></WhatsappIcon>
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
              <div
                id="addButtons"
                style={{ float: "left", width: "100%", marginLeft: "12px" }}
              >
                <div className="addToBagBtn  fixedCartBtnWrapper">
                  <div className="addButtons col-xs-12 pull-left">
                    <button
                      id="testWishButton"
                      className="addtocart pull-left "
                      onClick={() => {
                        const { _id, name, price, createdBy } = productDetails;
                        const img = productDetails.productPictures[0].img;
                        (
                          dispatch(addToCart({ _id, name, price, img, createdBy }))
                         
                        );
                        // props.history.push(`/cart`);
                        handleclose(false)
                      }}
                    >
                      <span>ADD TO Cart</span>
                    </button>
                    <button id="addToCart" className="wishlists pull-left ">
                      <span>SHARE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Signin
      show={showLoginModal}
      handleclose={()=>setShowLoginModal(false)}
        />
      </>
    );

    
 
  
  
};

export default ProductModal;
