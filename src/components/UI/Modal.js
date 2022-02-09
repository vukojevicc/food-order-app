import React from "react";
import reactDom from "react-dom";
import styles from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')
const Modal = (props) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
      {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
