import AboutMe from "./AboutMe";
import Counter from "./Counter";


function App() {
  return (
    // this props sends data to child components.
    <div>
      <AboutMe name="Kevin Choi" />
      <Counter />
    </div>
  );
}

export default App;
