import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Todo from "./components/Todo/Todo";
import Home from "./pages/Home";
import CloudTodo from "./pages/CloudTodo";

function App() {
  return (
    <div className="App">
      <Header />
      <CloudTodo/>
      <Footer />
    </div>
  );
}

export default App;
