import React, { useState } from 'react'
import {
    Modal,
    MaterialInput,
    MaterialButton,
    DropdownMenu,
  } from "../MaterialUI";
import Shopisthan__logo_bolte from "../../img/shopisthan_logo_bolte.png";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../actions';

const Signin = (props) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const auth = useSelector(state=>state.auth)
  const  dispatch = useDispatch();
  const {show,handleclose} = props;

  const login = () => {
 
      dispatch(userLogin({ email, password }));
      handleclose(false)

  };

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

    return (
        <> 
    <Modal visible={show} onClose={() => handleclose(false)}>
    <div className="CardLayout-Toaster-Container">
            <section className="CardLayout">
              <header className="CardLayout__header">
                <h1 className="spectrum-Heading1">Sign Up</h1>
                <p className="EmailPage__instructions">
                  Already Account ?
                  <a className="spectrum-Link EmailPage__create-account-link">
                    Login
                  </a>
                </p>
              </header>
              <section className="CardLayout__content">
                <form>
                  <section className="EmailPage__email-field form-group">
                  <div>
                      <label className="spectrum-FieldLabel">
                        First Name
                      </label>
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                  <div>
                      <label className="spectrum-FieldLabel">
                      Last Name
                      </label>
                      <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">
                        Email Address
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Password</label>
                      <input
                       type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                  </section>
                  <section className="EmailPage__submit mod-submit">
                    <div className="ta-left"></div>
                    <div className="ta-right">
                      <button
                        onClick={userSignup}
                        
                        className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
                      >
                        <span className="spectrum-Button-label">Submit</span>
                      </button>
                    </div>
                  </section>
                </form>
              </section>
            </section>
          </div>
        </Modal>
        </>
    )
}

export default Signin

