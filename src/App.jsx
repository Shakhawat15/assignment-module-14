import "./App.css";
import Header from "./components/header/Header.jsx";
import Content from "./components/content/Content.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Header title={`Welcome to the React World!`} />
      <Content />
      <Footer />
    </>
  );
}

export default App;
