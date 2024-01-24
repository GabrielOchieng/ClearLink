import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import arrow from "../../assets/arrow.png";
import imagesadv from "../../assets/images-adv.png";
import "./advantage.css";

const Advantage = () => {
  return (
    <div className="advantage">
      <section className="left">
        <div className="topdiv">
          <p className="upperp">The ClearLink Advantage</p>
          <h3>Why choose ClearLink?</h3>
          <p className="lowerp">
            In a world where connection is everything, ClearLink takes the lead.
            Our <br /> cutting-edge video conferencing app offers:
          </p>
        </div>
        <div className="lowerdiv">
          <div className="divitem">
            <IoVideocamOutline className="ldicon" />
            <h4>Crystal-clear HD video</h4>
            <p>
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </div>
          <div className="divitem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 24 25"
              fill="none"
              className="ldicon"
            >
              <path
                d="M3 10.5L3 14.5M7.5 6.5L7.5 18.5M12 3.5V21.5M16.5 6.5V18.5M21 10.5V14.5"
                stroke="#175CD3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <h4>Noise-cancelling audio</h4>
            <p>
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </p>
          </div>
          <div className="divitem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 24 25"
              fill="none"
              className="ldicon"
            >
              <path
                d="M21 10.5H3M16 2.5V6.5M8 2.5V6.5M7.8 22.5H16.2C17.8802 22.5 18.7202 22.5 19.362 22.173C19.9265 21.8854 20.3854 21.4265 20.673 20.862C21 20.2202 21 19.3802 21 17.7V9.3C21 7.61984 21 6.77976 20.673 6.13803C20.3854 5.57354 19.9265 5.1146 19.362 4.82698C18.7202 4.5 17.8802 4.5 16.2 4.5H7.8C6.11984 4.5 5.27976 4.5 4.63803 4.82698C4.07354 5.1146 3.6146 5.57354 3.32698 6.13803C3 6.77976 3 7.61984 3 9.3V17.7C3 19.3802 3 20.2202 3.32698 20.862C3.6146 21.4265 4.07354 21.8854 4.63803 22.173C5.27976 22.5 6.11984 22.5 7.8 22.5Z"
                stroke="#175CD3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <h4>Scheduling made easy</h4>
            <p>
              Streamline your agenda with ClearLink's intuitive scheduling. Set
              up meetings, send invitations, and receive reminders in one place.
            </p>
          </div>
          <div className="divitem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 24 25"
              fill="none"
              className="ldicon"
            >
              <path
                d="M7 10.5V8.5C7 5.73858 9.23858 3.5 12 3.5C13.6358 3.5 15.0882 4.28555 16.0004 5.5M12 14.5V16.5M19 15.5C19 19.366 15.866 22.5 12 22.5C8.13401 22.5 5 19.366 5 15.5C5 11.634 8.13401 8.5 12 8.5C15.866 8.5 19 11.634 19 15.5Z"
                stroke="#175CD3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <h4>Bank-grade security</h4>
            <p>
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </p>
          </div>
        </div>
      </section>
      <section className="right">
        <div className="arrow">
          <img src={arrow} alt="arrow" className="imgofarrow" />
        </div>
        <div className="bimagescont">
          <img src={imagesadv} alt="images" />
        </div>
      </section>
    </div>
  );
};

export default Advantage;
