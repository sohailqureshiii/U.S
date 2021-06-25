import React from "react";
import { Modal } from "../../components/MaterialUI";
import { addToCart } from "../../actions/cart.action";
import { BiRupee } from "react-icons/bi";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ProductModal = (props) => {
  const dispatch = useDispatch();

  const { productDetails, show, handleclose } = props;
  if (!productDetails) {
    return null;
  }

  const diffToast = () => {
    toast.success("Item Added Successfull !", {
      position:'top-center'
      
    });
  }

  return (
    <Modal visible={show} onClose={handleclose} size="lg">
      <div className="productDescriptionContainer">
        <div className="flexRow">
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="new"
              />
            </div>

            {/* action buttons */}
          </div>
        </div>
        {/* home > category > subCategory > productName */}
        <div className=" detailsWrapper">
          <div className="prodDesc clearfix">
            <div className="productDetails" style={{ width: "600px" }}>
              <div>
                <div
                  className="Storename"
                  style={{ maxWidth: "521px", top: "-1px" }}
                >
                  <p>
                    Mi Store
                    <button
                      style={{ marginLeft: "250px" }}
                      className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
                    >
                      Follow Store
                    </button>
                  </p>
                  <p
                    style={{
                      width: "130px",
                      fontSize: "12px",
                      color: "#878787",
                      fontWeight: "600",
                      marginRight: "20px",
                    }}
                  >
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

                {/* <span>i</span> */}
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
                      dispatch(addToCart({ _id, name, price, img, createdBy }));
                      // props.history.push(`/cart`);
                      handleclose(false);
                      
                    }}
                    onClick={diffToast}
                  >
                    <span >ADD TO Cart</span>
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
      <ToastContainer/>
    </Modal>
    
  );
};

export default ProductModal;
