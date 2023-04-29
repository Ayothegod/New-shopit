import {AiFillTwitterCircle,AiFillGithub,AiOutlineLink} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white">
      <div className=" ">
        <div className="bg-footer ">
          <div className=" flex justify-center md:justify-between max-w-[72rem] m-auto p-4 border-b border-b-neutral-700">

            <div>
              <p className="hidden md:block font-bold text-3xl  ">Shop-It.</p>
            </div>
            <div className="space-y-1">
              <p className="text-md md:text-lg font-medium ">NEW TO SHOPIT</p>
              <p className="text-sm text-slate-300">
                Subscribe to our newsletter to get updates on latest products
              </p>
              <div className="space-x-2">
                <input
                  type="text"
                  placeholder="Enter E-mail Address"
                  className="px-1 py-2 md:px-2 md:py-3 rounded-md "
                />
                <button className="px-4 py-2 md:px-6 md:py-3 text-white rounded-md bg-black border hover:bg-white hover:text-black  border-black font-semibold">
                  Enter
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="capitalize  ">
                no user?{" "}
                <button className="px-2 py-1 rounded-md bg-black ">
                  SignIn
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-footer">
          <div className="grid grid-cols-2 md:grid-cols-3 max-w-[72rem] m-auto gap-x-4 gap-y-8  p-4 ">
            <div className="">
              <p className="font-medium text-sm mb-2">NEED HELP?</p>
              <ul className="font-normal text-xs space-y-1">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>How to shop on Shopit</li>
                <li>Report a purchase</li>
                <li>Return and refunds policy</li>
              </ul>
            </div>
            <div className="">
              <p className="font-medium text-sm mb-2">ABOUT SHOPIT</p>
              <ul className="font-normal text-xs space-y-1">
                <li>About US</li>
                <li>Shopit Careers</li>
                <li>Privacy Npotice</li>
                <li>Official store</li>
                <li>Terms and conditions</li>
              </ul>
            </div>
            <div className="">
              <p className="font-medium text-sm mb-2">MAKE MONEY WITH SHOPIT</p>
              <ul className="font-normal text-xs space-y-1">
                <li>
                  sell on shopit!{" "}
                  <span className="text-orange-600 font-medium text-sm">
                    coming soon
                  </span>
                </li>
                <li>Join our shopit program</li>
                <li>Become a sales consultant</li>
              </ul>
            </div>
          </div>

          <div className=" p-4 flex flex-col justify-center items-center gap-y-2 ">
            <p className="font-medium text-md">JOIN US ON</p>
            <div className="flex gap-x-4">
              <Link href="https://twitter.com/aiiomide">
                <AiFillTwitterCircle className="text-blue-600 transition duration-100 ease-in hover:-translate-y-2" />
              </Link>
              <Link href="https://linkedin.com/in/aiiomide">
                <BsLinkedin className="text-blue-400 transition duration-100 ease-in hover:-translate-y-2" />
              </Link>
              <Link href="https://github.com/ayothegod">
                <AiFillGithub className="text-red-600 transition duration-100 ease-in hover:-translate-y-2" />
              </Link>
              <Link href="https://twitter.com/aiiomide">
                <AiOutlineLink className="text-blue-600 transition duration-100 ease-in hover:-translate-y-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
