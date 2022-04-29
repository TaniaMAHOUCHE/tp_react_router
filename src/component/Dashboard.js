import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="about" class="nav-link active" aria-current="page">About</Link>
              </li>
              <li class="nav-item">
                <Link to="contact" class="nav-link active" aria-current="page">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Dashboard;