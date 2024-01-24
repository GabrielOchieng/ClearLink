import React from "react";
import One from "../../assets/one.png";
import man1 from "../../assets/man1.png";
import lady1 from "../../assets/lady1.png";
import man2 from "../../assets/man2.png";
import lady2 from "../../assets/lady2.png";
import man3 from "../../assets/man3.png";
import lady3 from "../../assets/lady3.png";
import { TiMicrophoneOutline } from "react-icons/ti";
import { IoVideocamOutline } from "react-icons/io5";
import { FaDisplay } from "react-icons/fa6";

import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

import "./experience.css";
import { FaStar } from "react-icons/fa6";
import Navbar from "../navbar/Navbar";

const Experience = () => {
  return (
    <div className="all">
      <div className="nav">
        <Navbar />
      </div>
      <div className="experience">
        <section>
          <div className="header">
            <h2>
              Uniting the world, <br /> one video call at a time.
            </h2>
          </div>
          <div className="para">
            <p>
              Experience the future of communication with ClearLink - <br />{" "}
              where crystal-clear video conferencing meets <br /> unparalleled
              simplicity.
            </p>
          </div>
          <div className="stubborn">
            <button>Start your free trial</button>
            <div className="svgp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.1055 17.6576C8.76 17.6577 7.43545 17.6614 6.11093 17.6564C5.47164 17.654 4.8681 17.5139 4.3315 17.1442C3.56327 16.6149 3.12949 15.8887 3.01861 14.9621C2.98112 14.6488 2.98556 14.3362 2.98539 14.0229C2.98425 11.9455 2.9813 9.86806 2.98694 7.79064C2.9886 7.18281 3.10841 6.59641 3.44284 6.07727C4.00967 5.19738 4.81401 4.70243 5.86855 4.66999C6.59987 4.64749 7.33238 4.66512 8.06434 4.66161C8.37755 4.6601 8.69078 4.64441 9.0039 4.6469C9.16936 4.64822 9.21906 4.58032 9.21747 4.42089C9.21122 3.79354 9.21224 3.16607 9.21681 2.53869C9.22015 2.08077 9.41711 1.79829 9.79064 1.69542C10.222 1.57662 10.6528 1.83667 10.7401 2.27491C10.7644 2.39695 10.7766 2.52328 10.7775 2.64776C10.7815 3.21937 10.7867 3.79116 10.7758 4.3626C10.772 4.56333 10.8208 4.64295 11.0403 4.64938C12.0371 4.67858 13.0339 4.64762 14.0305 4.66484C15.3008 4.6868 16.3239 5.39259 16.7939 6.57421C16.9078 6.86043 16.9722 7.16212 16.98 7.47028C17.0425 9.92365 16.991 12.3772 16.9749 14.8305C16.9655 16.2594 15.7609 17.4917 14.3282 17.6275C14.0915 17.6499 13.8558 17.6583 13.6189 17.6582C12.4547 17.6579 11.2906 17.6578 10.1055 17.6576ZM5.95678 6.19887C5.14194 6.25783 4.57093 6.84107 4.55078 7.65545C4.53751 8.19192 4.54733 8.72896 4.54713 9.26574C4.54644 11.0225 4.54337 12.7793 4.54631 14.5361C4.54786 15.4586 5.12843 16.0894 6.0163 16.0928C8.66539 16.1031 11.3146 16.1029 13.9636 16.0923C14.8449 16.0887 15.4486 15.4534 15.4496 14.5693C15.4523 12.2967 15.4527 10.024 15.4494 7.75133C15.4481 6.8244 14.8263 6.1986 13.9013 6.19743C11.2661 6.19409 8.63094 6.19711 5.95678 6.19887Z"
                  fill="#175CD3"
                ></path>
                <path
                  d="M2.04289 9.95246C2.04291 11.4377 2.04309 12.9021 2.04278 14.3665C2.04272 14.6527 2.04173 14.6475 1.75323 14.6545C1.45013 14.6619 1.15185 14.6395 0.875652 14.5071C0.309544 14.2358 0.0295195 13.7576 0.0148384 13.1526C-0.00951087 12.149 0.00137854 11.1444 0.0104841 10.1404C0.0179942 9.31219 0.675786 8.66167 1.50414 8.64184C2.04325 8.62892 2.04324 8.62892 2.04305 9.15752C2.04296 9.41553 2.04294 9.67354 2.04289 9.95246Z"
                  fill="#175CD3"
                ></path>
                <path
                  d="M17.9575 12.2538C17.9576 11.118 17.9613 10.0031 17.9541 8.88831C17.9529 8.70085 18.0042 8.63472 18.1997 8.63604C18.5028 8.63808 18.7995 8.65679 19.0785 8.78075C19.676 9.04617 19.9738 9.5285 19.9869 10.1637C20.0073 11.1528 20.0016 12.1426 19.9897 13.1319C19.9791 14.0027 19.3085 14.6507 18.4321 14.651C17.8764 14.6513 17.9634 14.7273 17.9589 14.177C17.9537 13.5429 17.9576 12.9088 17.9575 12.2538Z"
                  fill="#175CD3"
                ></path>
                <path
                  d="M7.18439 10.8826C6.30831 10.6563 5.95708 9.60443 6.49951 8.87652C6.86572 8.38509 7.54175 8.25075 8.11797 8.53854C8.61749 8.78803 8.88209 9.44916 8.71367 10.0269C8.54707 10.5985 7.98614 10.9754 7.38664 10.9173C7.32448 10.9113 7.26312 10.897 7.18439 10.8826Z"
                  fill="#175CD3"
                ></path>
                <path
                  d="M13.7153 9.94561C13.513 10.8954 12.3155 11.2594 11.5976 10.5618C11.2151 10.19 11.121 9.5618 11.3775 9.03621C11.5806 8.61991 12.1592 8.32903 12.6447 8.39914C13.2114 8.48098 13.6178 8.87095 13.7227 9.41302C13.7568 9.58872 13.757 9.75679 13.7153 9.94561Z"
                  fill="#175CD3"
                ></path>
                <path
                  d="M7.8998 14.4796C7.77567 14.6078 7.63491 14.6534 7.47486 14.6527C7.15519 14.6514 6.83545 14.6561 6.51585 14.6512C6.18533 14.6462 5.99046 14.4496 5.9922 14.1338C5.9939 13.8244 6.19505 13.6275 6.52577 13.6223C6.83147 13.6174 7.13734 13.6183 7.44307 13.6221C7.95291 13.6284 8.17162 14.0269 7.8998 14.4796Z"
                  fill="#175CD3"
                ></path>
                <path
                  d="M9.77294 14.6532C9.65486 14.6525 9.55709 14.6565 9.45998 14.6503C9.17661 14.6322 8.98073 14.4296 8.97101 14.1498C8.96179 13.8846 9.16262 13.6401 9.43681 13.6281C9.80504 13.612 10.1753 13.6106 10.5433 13.6301C10.8481 13.6463 11.008 13.8553 10.9992 14.1683C10.9912 14.4517 10.8016 14.6412 10.5037 14.6505C10.2672 14.6579 10.0303 14.6528 9.77294 14.6532Z"
                  fill="#175CD3"
                ></path>
                <path
                  d="M13.8357 13.7487C14.0108 13.9437 14.0597 14.1501 13.9485 14.3765C13.8386 14.6 13.6396 14.6576 13.4073 14.6539C13.1076 14.6492 12.8078 14.6556 12.5081 14.6515C12.1741 14.6469 11.975 14.4518 11.9756 14.1381C11.9762 13.8311 12.1822 13.6279 12.5105 13.6224C12.8241 13.6172 13.1379 13.6218 13.4516 13.6217C13.5878 13.6217 13.7139 13.6529 13.8357 13.7487Z"
                  fill="#175CD3"
                ></path>
              </svg>
              <p>Discover AI assistant</p>
            </div>
          </div>

          <div className="imgr">
            <div className="images">
              <img src={One} alt="imagep" />
            </div>
            <div className="reviews">
              <div className="reviewstop">
                <div className="stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
                <div className="parag">
                  <p>5.0</p>
                </div>
              </div>

              <div className="span">
                <p> from 3000+ reviews</p>
              </div>
            </div>
          </div>
        </section>
        <section className="imagecontainer">
          <div className="images">
            <div className="avatarimg man1  hang">
              <img src={man1} alt="avatar" className="hangimg" />
            </div>

            <div className="avatarimg lady1 hanglady1">
              <img src={lady1} alt="avatar" className="lady1img" />
            </div>

            <div className="avatarimg man2 hang1">
              <img src={man2} alt="avatar" className="hangimg1" />
            </div>

            <div className="avatarimg lady2 hang2">
              <img src={lady2} alt="avatar" className="hangimg2" />
            </div>

            <div className="avatarimg man3 hang3">
              <img src={man3} alt="avatar" className="man3img" />
            </div>

            <div className="avatarimg lady3">
              <img src={lady3} alt="avatar" className="lady3img" />
            </div>
          </div>
          <div className="icons">
            <TiMicrophoneOutline className="icon" />
            <IoVideocamOutline className="icon" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 20 20"
              fill="none"
              className="icon"
            >
              <path
                d="M6.66669 17.5H13.3334M10 14.1667V17.5M5.66669 14.1667H14.3334C15.7335 14.1667 16.4336 14.1667 16.9683 13.8942C17.4387 13.6545 17.8212 13.272 18.0609 12.8016C18.3334 12.2669 18.3334 11.5668 18.3334 10.1667V6.5C18.3334 5.09987 18.3334 4.3998 18.0609 3.86502C17.8212 3.39462 17.4387 3.01217 16.9683 2.77248C16.4336 2.5 15.7335 2.5 14.3334 2.5H5.66669C4.26656 2.5 3.56649 2.5 3.03171 2.77248C2.56131 3.01217 2.17885 3.39462 1.93917 3.86502C1.66669 4.3998 1.66669 5.09987 1.66669 6.5V10.1667C1.66669 11.5668 1.66669 12.2669 1.93917 12.8016C2.17885 13.272 2.56131 13.6545 3.03171 13.8942C3.56649 14.1667 4.26656 14.1667 5.66669 14.1667Z"
                stroke="#175CD3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>

            <HiOutlineEmojiHappy className="icon" />
            <BiMessageRoundedDetail className="icon" />
            <IoSettingsOutline className="icon" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
