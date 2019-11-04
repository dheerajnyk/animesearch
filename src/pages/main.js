import React, { useState } from "react";
import { withRouter ,Link  } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import ".././main.css";
import { ApolloProvider } from "@apollo/react-hooks";
import cubejs from "@cubejs-client/core";
import { CubeProvider } from "@cubejs-client/react";
import client from ".././graphql/client";
//import Header from "./components/Header";
const API_URL = "http://localhost:4000";
const CUBEJS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzI2MTIzMDksImV4cCI6MTU3MjY5ODcwOX0.Q793cR2omkpH_6PFf3LpqxDgtI8Fz3aP8moO394L1c8";
const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: `${API_URL}/cubejs-api/v1`
});
const { Header, Sider, Content } = Layout;

class MainPage extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="root-container">
        <div className="box-controller">
          <div className = "controller">
          DASHBOARD
          </div>
        </div>
        <div className="box-container">
          <LoginBox/>
        </div>
      </div>
    );
  }
}
class LoginBox extends React.Component{
  constructor(props){
    super(props);
  }
  submitlogin(e){
  }
  render(){
    return(
    <div className="inner-container">
      <div className="header">
        LOGIN
      </div>
      <div className = "box">
        <div className = "input-group">
          <label htmlFor="username">Username</label>
          <input className="login-input" type="text" name="username" placeholder="username"></input>
        </div>
        <div className = "input-group">
          <label htmlFor="password">Password</label>
          <input className="login-input" type="text" name="password" placeholder="password"></input>
        </div>
        <button type="button" className="login-btn" onClick={this.submitlogin.bind(this)}>SUBMIT</button>
      </div>
    </div>);
  }
}

const AppLayout = ({ children }) => (
    <Layout
      style={{
        height: "100%"
      }}
    >
      <MainPage />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
const App1 = ({ children }) => (
    <CubeProvider cubejsApi={cubejsApi}>
      <ApolloProvider client={client}>
        <MainPage />

      </ApolloProvider>
    </CubeProvider>
  );


export default withRouter(App1);