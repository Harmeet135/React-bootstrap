import "./post.css";
import img5 from "../../assests/r4.png";
import i3 from "../../icons/i3.png";
import dots from "../../icons/dots.png";
import pfp3 from "../../icons/pfp3.png";
import views from "../../icons/views.png";
import share from "../../icons/share.png";
import date from "../../icons/date.png";
import location from "../../icons/location.png";

const Post3 = () => {
  return (
    <div class="boundery my-3">
      <div>
        <img class="img-size" src={img5} alt="" />
      </div>
      <div class="m-4">
        <img src={i3} alt="" />
        <div class="d-flex info-1 mt-3 ">
          <h4 class="py-2">
            Finance & Investment Elite Social Mixer @Lujiazui
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
        <div class="d-flex sett">
          <div class="d-flex">
            <img class="h-25" src={date} alt="" />
            <p>Fri,12 Oct,2019</p>
          </div>
          <div class="d-flex mx-7">
            <img class="h-25" src={location} alt="" />
            <p>Ahmedabad,India</p>
          </div>
        </div>
        <button class="w-100 but-bg rounded-2 border border-secondary p-1">
          Visit Website
        </button>
        <div class="pfp-info d-flex justify-content-between ">
          <div class=" my-auto d-flex ">
            <img src={pfp3} alt="" />
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

export default Post3;
