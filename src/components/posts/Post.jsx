import "./post.css";
import img2 from "../../assests/rectangle5.png";
import art1 from "../../icons/article.png";
import dots from "../../icons/dots.png";
import pfp from "../../icons/pfp1.png";
import views from "../../icons/views.png";
import share from "../../icons/share.png";

const Post = () => {
  return (
    <div class="boundery  my-3">
      <div>
        <img src={img2} class=" img-size" alt="..." />
      </div>
      <div class="m-4">
        <img src={art1} alt="" />
        <div class="d-flex info-1 mt-3 ">
          <h4 class="py-2">
            What if famous brands had regular fonts?Meet RegulaBrands!
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
            <img src={pfp} alt="" />
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

export default Post;
