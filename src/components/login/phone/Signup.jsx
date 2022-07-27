import "./signup.css";

import { useContext, useState } from "react";
import cancel from "../../../icons/cancel.png";
import { Gloabaldata } from "../Loginb";

const Signup = () => {
  const { Sign1, setSign1 } = useContext(Gloabaldata);
  const [Sign, setSign] = useState(false);
  const showbarSide = () => {
    setSign1(!Sign1);
  };

  console.log(Sign1);

  const Change = (event) => {
    event.preventDefault();
    setSign(!Sign);
  };

  return (
    <div class="signn">
      <div class={Sign1 ? "signup active" : "signup"}>
        <button onClick={showbarSide}>
          <img src={cancel} alt="" />
        </button>

        <div class="mx-5 mt-3">
          {Sign ? <h2>Create Account</h2> : <h2>Sign in</h2>}

          {Sign && (
            <div class="inputs1 d-flex">
              <input class="w-100" type="text" placeholder="First Name" />
              <input class="w-100" type="text" placeholder="Last Name" />
            </div>
          )}
          <input class="w-100 p-1" type="text" placeholder="Email" />
          <input class="w-100 p-1" type="password" placeholder="Password" />

          {Sign ? (
            <>
              <input
                class="w-100 p-1"
                type="password"
                placeholder="Confirm Password"
              />
              <input
                class="btn btn-primary w-100 p-2 mt-3 rounded-pill"
                type="button"
                value="Create Account"
              />
              <button
                type="button "
                class="btn btn-outline-secondary w-100 mt-3"
              >
                Sign Up with facebook
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary  w-100 mt-1"
              >
                Sign Up with Google
              </button>
            </>
          ) : (
            <>
              <input
                class="btn btn-primary w-100 p-2 mt-3 rounded-pill"
                type="button"
                value="Login In"
              />
              <button
                type="button "
                class="btn btn-outline-secondary w-100 mt-3"
              >
                Sign In with facebook
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary  w-100 mt-1"
              >
                Sign In with Google
              </button>
            </>
          )}
        </div>
        <div>
          {Sign ? (
            <p class="mx-5">
              Already have an account?
              <button
                onClick={Change}
                type="button"
                class="text-decoration-underline"
              >
                Sign in
              </button>
            </p>
          ) : (
            <p class="mx-5">
              Don't have a account yet?
              <button
                type="button"
                class="text-decoration-underline"
                onClick={Change}
              >
                Create one for free
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
