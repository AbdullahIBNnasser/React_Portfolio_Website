import React from "react";
import "./experiance.css";
import { BsFillPatchCheckFill} from "react-icons/bs";

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h1>My Experiance</h1>
      <div className="container experiance-container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <article className="experiance__detials">
              <BsFillPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__detials">
              <BsFillPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__detials">
              <BsFillPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__detials">
              <BsFillPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__detials">
              <BsFillPatchCheckFill className="experiance-details-icon" />
              <div>
                {" "}
                <h4>Tailwind</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__detials">
              <BsFillPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiance__backend">
          <h3>Backend Development</h3>
          <div className="experiance__content">
            <article className="experiance__detials">
              <BsFillPatchCheckFill className="experiance-details-icon" />
              <div>
                {" "}
                <h4>Node JS</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__detials">
              <BsFillPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__detials">
              <BsFillPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experiance__detials">
              <BsFillPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__detials">
              <BsFillPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
