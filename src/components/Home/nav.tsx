import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-10 py-5">
        <Link to='/'><h1 className="bg-black text-white rounded-md px-4 py-2 font-bold text-xl">IFEMAT</h1></Link>

        <div className="flex gap-10 items-center">
          <button>About</button>
          <button>Contact</button>
          <button>Blog</button>
        </div>
      </div>

      {/* <iframe src="https://jupyter.org/try-jupyter/notebooks/?path=notebooks/Intro.ipynb" width='1600' height='500'></iframe> */}
    </div>
  );
};

export default Nav;
