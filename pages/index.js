// pages/index.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../redux/actions/apiAction";
import { getUser, getCookie } from "../redux/actions/authActions";
import { setTitle } from "../redux/actions/titleAction";
import axios from "axios";

const Index = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.getPosts();
    props.getUser(props.token);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Welcome to Authentication App</h3>
      <div>Prop from getInitialProps {props.custom}</div>
      <pre style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" , background: "white"}}>
        Prop from Redux {JSON.stringify(props)}
      </pre>
      <button className="btn" onClick={handleSubmit}>
        Load
      </button>
    </div>
  );
};

Index.getInitialProps = async ({ store, req, isServer, pathname, query }) => {
  await store.dispatch(getPosts());
  const token = getCookie("token", req)
  await getUser(token);
  store.dispatch(setTitle("Authentication Home"));
  return { custom: "custom" , token};
};
export default connect(
  state => state,
  { getPosts, setTitle, getUser }
)(Index);
