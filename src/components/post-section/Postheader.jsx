import "./postheader.css";
const Postheader = () => {
  return (
    <div class="d-flex w-100 px-6 sp-bt  border-bottom border-secondary">
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <a class="navbar-brand border-bottom border-dark" href="#">
          All Post (32)
        </a>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Article
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Event
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Job
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="dropdown mobile-b">
        <button
          class="btn btn-secondary dropdown-toggle mt-2"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter All
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div class="my-4">
        <button class="btn bg-secondary mx-3 font-weight-bold">
          <a
            class="nav-link dropdown-toggle font-weight-bold"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Write a Post
          </a>
        </button>
        <button type="button" class="btn btn-primary">
          Join Group
        </button>
      </div>
    </div>
  );
};

export default Postheader;
