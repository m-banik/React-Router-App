import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../layouts/Header";
import Aside from "../layouts/Aside";
import Content from "../layouts/Content";
import Footer from "../layouts/Footer";
import Header1 from "../images/header1.jpg";
import Header2 from "../images/header2.jpg";
import Header3 from "../images/header3.jpg";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
    this.graphics = [Header1, Header2, Header3];
    this.menuOptions = [
      {
        id: 1,
        text: "start",
        path: "/"
      },
      {
        id: 2,
        text: "products",
        path: "/products"
      },
      {
        id: 3,
        text: "contact us",
        path: "/contact"
      },
      {
        id: 4,
        text: "admin panel",
        path: "/admin"
      }
    ];
    this.products = [
      {
        id: 1,
        text: "car",
        path: "/products/car"
      },
      {
        id: 2,
        text: "bike",
        path: "/products/bike"
      },
      {
        id: 3,
        text: "motorcycle",
        path: "/products/motorcycle"
      }
    ];
    this.articles = [
      {
        id: 1,
        title: "What is the string theory and why it's so important?",
        author: "Jan Nowak",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic assumenda, voluptatum dicta similique minima quae iste aut nulla id alias possimus dolor illo dolore voluptates, ipsam, consectetur accusamus repudiandae asperiores!"
      },
      {
        id: 2,
        title: "The Fermie paradox- what is it about?",
        author: "Magdalena Kowalska",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas velit, odit beatae officia qui sunt in amet asperiores at eligendi, earum porro ad dignissimos quo alias quas sapiente laudantium."
      },
      {
        id: 3,
        title: "Dark matter and dark energy",
        author: "Artur Malinowski",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique maxime excepturi, animi assumenda aspernatur iusto architecto! Vel laboriosam, iste praesentium perferendis veniam laborum, corporis ipsam magni et libero inventore amet!"
      }
    ];
    this.users = [
      {
        id: 1,
        name: "Admin",
        status: "admin",
        password: "qwerty!"
      }
    ];
  }
  handleLogin = () => {
    this.setState(prevState => ({
      isLogged: !prevState.isLogged
    }));
  };
  render() {
    return (
      <Router>
        <header>
          <Header graphics={this.graphics} />
        </header>
        <main>
          <aside>
            <Aside menuOptions={this.menuOptions} />
          </aside>
          <div className="pageContent">
            <Content
              products={this.products}
              articles={this.articles}
              isLogged={this.state.isLogged}
              users={this.users}
              handleLogin={this.handleLogin}
            />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    );
  }
}
export default App;
