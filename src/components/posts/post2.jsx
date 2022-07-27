import "./post.css";
import img4 from "../../assests/r3.png";
import i2 from "../../icons/i2.png";
import dots from "../../icons/dots.png";
import pfp2 from "../../icons/pfp2.png";
import views from "../../icons/views.png";
import share from "../../icons/share.png";

const Post2 = () => {
  return (
    <div class="boundery  my-3">
      <div>
        <img class="img-size" src={img4} alt="" />
      </div>
      <div class="m-4">
        <img src={i2} alt="" />
        <div class="d-flex info-1 mt-3 ">
          <h4 class="py-2">
            Tax Benefits for Investment under National Pension Scheme launched
            by Government
          </h4>
          <div class="dropdown">
            <button
              class="text-m"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img class="dots" src={dots} alt="" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Edit
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Report
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>
          I've worked on UX for hte better part of a decade. from now on , I
          plan to rei..
        </p>

        <div class="pfp-info d-flex justify-content-between ">
          <div class=" my-auto d-flex ">
            <img src={pfp2} alt="" />
            <h5 class="px-3 pt-2">Sarthak Kamra</h5>
          </div>
          <div class=" my-auto d-flex mx-2 sp-bet">
            <img src={views} alt="" />
            <p>1.4K Views</p>
            <img class="mt-4" src={share} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post2;
