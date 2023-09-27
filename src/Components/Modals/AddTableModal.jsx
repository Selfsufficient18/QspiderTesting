import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";

const AddTableModal = ({ open: { isOpen, setIsOpen } }) => {
  let Compo = () => {
    return (
      <>
        <aside>
          <main className="portal_container">
            <p onClick={() => setIsOpen(false)}>❌</p>
            <article>
              <h1>Header</h1>
            </article>
            <article>
              <h1>Body</h1>
            </article>
            <article>
              <h1>Footer</h1>
            </article>
          </main>
        </aside>
      </>
    );
  };
  return <div>{createPortal(<Compo />, document.querySelector("#dynamicTable"))}</div>;
};

export default AddTableModal;
