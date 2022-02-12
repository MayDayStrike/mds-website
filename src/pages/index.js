import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import DemandList from "../components/DemandList"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import SignupForm from "../components/SignupForm"
import "./index.module.css";

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#e6dba9',
    boxShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.4)",
    padding: 0,
    borderRadius: 2,
    border: 'none',
    maxWidth: '40rem',
  },
  header: {
    width: '100%',
    padding: '1rem 2.5rem',
    backgroundColor: '#c73a26',
    color: '#e6dba9',
  },
  body: {
    padding: '2rem 2rem 1rem 2rem',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .4)',
  },
};

const IndexPage = () => {
  const [ show, setShow ] = useState(false);
  useEffect(() => {
    Modal.setAppElement('body');
  });
  
  return (
    <Layout>
      <Seo title="May Day Strike" />
      <div style={{ marginBottom: "3rem" }}>
        <h2>Who We Are</h2>
        <p>
          May Day Strike is a grassroots movement focused on establishing economic
          security, dignity, and fairness for workers of every nationality, race,
          and political affiliation.
        </p>
        <p>
          May 1 will mark the beginning of a general strike, a debt strike, and a
          series of protests & demonstrations that will last until workers’
          demands are met.
        </p>
        <p>What are we asking for, exactly?</p>
      </div>
      <DemandList />
      <p>
        Join us on Discord and social media to become part of the new era of labor
        organization in the United States and across the globe.
      </p>
      <div style={{ width: '100%' }}>
        <button
          style={{ margin: '0 auto', display: 'block' }}
          onClick={() => setShow(true)}
        >
          Sign Up!
        </button>
      </div>
      

      <Modal
        isOpen={show}
        onAfterOpen={null}
        onRequestClose={() => setShow(false)}
        style={modalStyles}
        containerStyle={{background: 'blue'}}
        contentLabel="Sign Up"
        shouldCloseOnOverlayClick={false}
      >
        <div style={modalStyles.header}>
          <h2 style={{ marginBottom: 0, display: 'inline' }}>
            Sign Up for the Newsletter
          </h2>
          <span
            onClick={() => setShow(false)}
            style={{ float: 'right', color: '#2A2B2B', fontSize: 36 }}
          >
              <FontAwesomeIcon icon={faTimes} />
            </span>
        </div>
        <div style={modalStyles.body}>
          <SignupForm />
        </div>
      </Modal>
    </Layout>
  );
}

export default IndexPage
