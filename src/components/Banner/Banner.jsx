import { Link } from "react-router-dom";
import bannerImg from "../../assets/Task1.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-[90vh] place-items-stretch"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Organize it all
          </h1>
          <p className="mb-5 text-white">
            With TaskSwift, you can organize your tasks, projects, and more.
          </p>
          <Link>
            <button className="btn btn-error text-white">Let's Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
