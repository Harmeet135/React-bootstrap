import "./login.css";
import login from "../../assests/login.png";
import { Gloabaldata } from "../navbar/Navbar";
import { useContext, useState } from "react";
import cancel from "../../icons/cancel.png";

const Login = () => {
  const { sideBar, setsideBar } = useContext(Gloabaldata);
  const [Sign, setSign] = useState(false);
  const showbarSide = () => {
    setsideBar(!sideBar);
  };

  const Change = (event) => {
    event.preventDefault();
    setSign(!Sign);
  };

  return (
    <div>
      <div class={sideBar ? "login active" : "login"}>
        <div class="wrapper">
          <button onClick={showbarSide}>
            <img src={cancel} alt="" />
          </button>
          <div class="boxx">
            <h5 class="bg-col px-4 py-4">
              Let's learn,share & inspire each other with our passion for
              computer enginerring. Sign up now
            </h5>
            <div class="d-flex content-center">
              <div class="mx-5 mt-3 w-50">
                {Sign ? <h2>Create Account</h2> : <h2>Sign in</h2>}

                {Sign && (
                  <div class="inputs d-flex">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                  </div>
                )}
                <input class="w-100 p-1" type="text" placeholder="Email" />
                <input
                  class="w-100 p-1"
                  type="password"
                  placeholder="Password"
                />

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
                    <img src={login} alt="" />
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
                    <img src={login} alt="" />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
