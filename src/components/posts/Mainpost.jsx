import Post from "./Post";
import Post2 from "./post2";
import Post3 from "./post3";
import Post4 from "./post4";
import location from "../../icons/location.png";
import pen from "../../icons/pen.png";

const Mainpost = () => {
  return (
    <div class="d-flex post-size m-auto">
      <div class="posts">
        <Post />
        <Post2 />
        <Post3 />
        <Post4 />
      </div>
      <div class="wid mx-3 my-4">
        <div class="d-flex border-bottom border-secondary extra my-5 justify-content-between  ">
          <div class="d-flex mr-5 w-100">
            <img class="h-50 mt-1 mr-2" src={location} alt="" />
            <p>Noida , India</p>
          </div>
          <div class="d-flex">
            <img class="h-50 " src={pen} alt="" />
          </div>
        </div>
        <p>
          Your location will help us serve better and extend a personalised
          experience
        </p>
      </div>
    </div>
  );
};

export default Mainpost;
