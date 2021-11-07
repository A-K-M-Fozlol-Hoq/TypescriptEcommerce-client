import AppRouter from "./AppRouter";
import Header from "./components/common/Header";
// import Help from "./pages/Help/Help";
// import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <AppRouter>
        <Header />
      </AppRouter>
      {/* <Help></Help>
      <Home></Home> */}
    </div>
  );
}

export default App;
