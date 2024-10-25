import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Todo from "./components/Todo/Todo";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
