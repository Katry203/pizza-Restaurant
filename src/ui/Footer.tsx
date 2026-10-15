import amazonPayLog from "../assets/amazon-pay.png";
import americanExpressLog from "../assets/American-Express-Color.png";
import mastercard from "../assets/mastercard.webp";
import visaLogo from "../assets/visaLogo.png";
import paypal from "../assets/paypal.png";
import apple from "../assets/get-apple-store.png";
import google from "../assets/get-google-play.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Button from "./Button";
export default function Footer() {
  return (
    <footer className="site-footer theme-surface pt-12 bg-[#efeee8]">
      <div className="container mx-auto px-5 sm:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:justify-items-center justify-items-star">
          {/*section of our help*/}
          <div className=" md:justify-self-start  ">
            <h2 className="text-2xl cursor-default font-semibold mb-2 text-textColor">
              Let Us Help You
            </h2>
            <ul className="cursor-pointer duration-700 transition-all">
              <li className={`listItem  w-fit`}>Help</li>
              <li className={`listItem  w-fit`}>Shipping & Delivery</li>
              <li className={`listItem  w-fit`}>Returns & Replacements</li>
              <li className={`listItem  w-fit`}>Recalls and Product Safety Alerts</li>
            </ul>
          </div>
          {/*section of support*/}
          <div className=" md:justify-self-center">
            <h2 className="text-2xl cursor-default font-semibold mb-2 text-textColor ">
              Support
            </h2>
            <ul className="cursor-pointer">
              <li className="listItem w-fit">
                <a href="tel:+201146114898">Phone: 01146114898</a>
              </li>
              <li className="listItem w-fit">
                <a href="mailto:abdelrahmanragab334@gmail.com">
                  Email: abdelrahmanragab334@gmail.com
                </a>
              </li>
              <li className={`listItem  w-fit`}>Address: 1234 Street Cairo, Egypt</li>
            </ul>
          </div>
          {/*section about us */}
          <div className=" lg:justify-self-end ">
            <h2 className="text-2xl cursor-default font-semibold mb-2 text-textColor">
            Opening Hours
            </h2>
            <ul className="cursor-pointer">
               
              <li className={`listItem  w-fit`}>Monday/Friday 9:00-23:00 </li>
              <li className={`listItem  w-fit`}>Saturday 10:00-21:00</li>
              <li className={`listItem  w-fit`}>              Weekend Closed
              </li>
            </ul>
            <h3 className="text-2xl cursor-default font-semibold mb-2 text-textColor">
              Follow Us Now:
            </h3>
            <ul className="flex gap-3 cursor-pointer">
              <li className=" size-8 rounded-full border hover:bg-secondColor duration-200 transition-colors hover:text-[#f54748]  border-black/50 flex justify-center items-center">
                <a
                  href="https://www.facebook.com/abdo.elkatry.90/?locale=ar_AR"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className=" self-center  fa-brands fa-facebook-f"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className=" size-8 rounded-full border hover:bg-secondColor duration-200 transition-colors hover:text-[#f54748]  border-black/50 flex justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/abdelrahman-elkatry-0298b121a/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className=" self-center  fa-brands fa-linkedin"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className=" size-8 rounded-full border hover:bg-secondColor duration-200 transition-colors hover:text-[#f54748]  border-black/50 flex justify-center items-center">
                <a
                  href="https://www.instagram.com/abdelrhman.elkatry/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className=" self-center  fa-brands fa-instagram"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className=" size-8 rounded-full border hover:bg-secondColor duration-200 transition-colors hover:text-[#f54748]  border-black/50 flex justify-center items-center">
                <a
                  href="mailto:abdelrahmanragab334@gmail.com"
                  className=" self-center "
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*section of Subscribe */}
        <div className="border-b-2 pb-8">
          <h2 className="text-2xl cursor-default font-semibold text-textColor">
            Are you new with us?
          </h2>
          <p className="my-3 text-textColor cursor-default">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
          <div className="md:flex gap-4">
            <input
              type="text"
              className="w-full flex-grow rounded-md p-2 shadow-none outline-none md:w-[90%]"
              placeholder="Email.."
            />
            <Button type={"primary"}>Subscribe </Button>
          </div>
        </div>

        {/*section of Payment */}
        <div className="my-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex-wrap flex gap-2 items-center">
            <span className="me-3 text-textColor  cursor-default font-semibold">
              Payment Partners
            </span>
            <img src={amazonPayLog} alt="Amazon Pay" className="w-16" />
            <img
              src={americanExpressLog}
              alt="American Express"
              className="w-16"
            />
            <img src={paypal} alt="Paypal" className="w-16" />
            <img src={visaLogo} alt="Visa" className="w-16" />
            <img src={mastercard} alt="Mastercard" className="w-16" />
          </div>

          <div className="flex-wrap flex gap-2 items-center">
            <span className="me-3 text-textColor  cursor-default font-semibold">
              Get App Now
            </span>
            <div className="sm:flex">
              <img src={apple} alt="Amazon Pay" className="w-28" />
              <img src={google} alt="American Express" className="w-28" />
            </div>
          </div>
        </div>
      </div>
      {/*section of >Privacy Policy */}
      <div className="bg-[#1D242D] text-white/60 p-6 ">
        <div className="container mx-auto flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="flex space-x-4   cursor-default">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div className="cursor-default text-sm sm:text-right">
            Copyright © 2022, Outreach Monks. All rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
