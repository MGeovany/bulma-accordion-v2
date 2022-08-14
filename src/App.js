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
          className="card-header is-flex is-align-items-center "
          style={{ cursor: "pointer" }}
          onClick={toggleCardState}
        >
          <span className="circle">{number}</span>

          <p className="p-5 has-text-weight-medium is-size-5">{title}</p>
        </header>
        <div
          className="card-content"
          style={{
            maxHeight: cardState ? 1000 : 0,
            padding: cardState ? null : 0,
            overflow: "hidden",
            transition: "padding 250ms ease"
          }}
        >
          <div className="content">{children} </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <section className="container-accordion">
        <div className="container">
          <div className="columns is-multiline">
            <Collapse title="Client Profile" number="1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse elementum mauris et porta mattis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse elementum mauris et porta mattis.
              </p>
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
