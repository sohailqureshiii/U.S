import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Profilepic from "../../img/profilepic.jpg";
import NavBar from "../Navbar";
import NewModal from "../../components/Modal-BT";
import Input from "../../components/Modal-BT/input";
import { edituserProfile } from "../../actions";

/**
 * @author
 * @function MyProfile
 **/

const MyProfile = (props) => {
  const auth = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState(auth.user.firstName);
  const [lastName, setLastName] = useState(auth.user.lastName);
  const [email, setEmail] = useState(auth.user.email);
  const [userEditModal, setUserEditModal] = useState(false);
  const dispatch = useDispatch();

  const editUser = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    dispatch(edituserProfile(auth.user));
    setUserEditModal(false);
  };

  const renderUserEditModal = () => {
    return (
      <NewModal
        show={userEditModal}
        handleclose={() => setUserEditModal(false)}
        onSubmit={editUser}
        modaltitle={`Edit Profile`}
      >
        <Input
          label={"First Name"}
          placeholder={`First Name`}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Input
          label={"Enter Last Name"}
          value={lastName}
          placeholder={`Enter Last Name`}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Input
          label={"Enter Email"}
          value={email}
          placeholder={`Enter Email`}
          onChange={(e) => setEmail(e.target.value)}
        />
      </NewModal>
    );
  };

  return (
    <>
      <NavBar />
      {/* ProfileHEader  starts*/}
      <main className="SCxLW o64aR " role="main" style={{ paddingTop: "55px" }}>
        <div className="v9tJq v9tJq">
          <header className="HVbug">
            <section className="XjzKX">
              <section className="_4dMfM">
                <section className="M-jxE">
                  <img alt="Profile Pic" className="be6sr" src={Profilepic} />
                </section>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <h2 className="_7Uhw9  fKFb1  yUEEX  KV-D4  fDxY1">
                  First Name : {auth.user.firstName}
                </h2>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <h2 className="_7Uhw9  fKFb1  yUEEX  KV-D4  fDxY1">
                  Last Name : {auth.user.lastName}
                </h2>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <h2 className="_7Uhw9  fKFb1  yUEEX  KV-D4  fDxY1">
                  Email Id : {auth.user.email}
                </h2>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <button onClick={() => setUserEditModal(true)}>
                  Edit Profile
                </button>
              </section>
            </section>
          </header>
          {/* ProfileHEader  ends*/}
        </div>
        {renderUserEditModal()}
      </main>
    </>
  );
};

export default MyProfile;
