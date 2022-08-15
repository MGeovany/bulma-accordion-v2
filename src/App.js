import React, { useState } from "react";
import "./styles.css";

const Collapse = ({ title, children, number }) => {
  const [state, setState] = useState({ cardState: false });

  const toggleCardState = () => {
    setState({ cardState: !state.cardState });
  };

  const { cardState } = state;

  return (
    <div className="a">
      <div className="card" aria-hidden={cardState ? "false" : "true"}>
        <header
          className="card-header is-flex is-align-items-center"
          style={{
            cursor: "pointer",
            borderBottom: number === "1" ? "7px solid #f2e177" : null,
          }}
          onClick={toggleCardState}
        >
          <span
            className="circle"
            style={{
              backgroundColor: cardState ? "#176a78" : "#cccccc",
            }}
          >
            {number}
          </span>

          <p className="p-4 has-text-weight-medium is-size-5">{title}</p>
        </header>
        <div
          className="card-content"
          style={{
            maxHeight: cardState ? 1000 : 0,
            padding: cardState ? null : 0,
            overflow: "hidden",
            transition: "padding 250ms ease",
            backgroundColor: "#383536",
            color: "#fff",
          }}
        >
          <div className="content accordion-content is-flex is-flex-direction-column is-align-content-center is-justify-content is-align-items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <section className="container-accordion ">
        <div className="container">
          <div className="is-multiline section-accordion">
            <Collapse title="Client Profile" number="1">
              <div>Client Information</div>
              <div>U.S. Citizenship</div>
              <div>Contact Information</div>
            </Collapse>
            <Collapse title="Contact Choice" number="2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse elementum mauris et porta mattis.
              </p>
            </Collapse>
            <Collapse title="Review" number="3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse elementum mauris et porta mattis.
              </p>
            </Collapse>
            <Collapse title="Upload Document" number="4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse elementum mauris et porta mattis.
              </p>
            </Collapse>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
