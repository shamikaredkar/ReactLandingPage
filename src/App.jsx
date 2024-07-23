import Header from "./components/Header";
import CoreConcepts from "./components/Props";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  const handleClick = (selectedButton) => {
    /*
    - selectedButton parameter is used an identifier to know which button was selected
    - The idea here is that:
      - selectedButton should be a string that is either Components, JSX, Props, State (Identifiers received thru the selectedButton identifier)
    - Then we use an if check to change the dynamic content produced by each button
    - We have to make sure that we pass the appropriate identifier based on which button was clicked
    - By just passing handleClick to the onClick prop, we won't get that value
    - Hence we pass an arrow function as a value to the onClick
    - The annonymous arrow function will make sure that the value that's passed to onClick is the string of the button
    - Arrow function will get passed to the TabButton
    - But only when the button is clicked triggering the onClick is when the value inside the anonymous function (handleClick) will be passed to onClick
    */
    setSelectedTopic(selectedButton);
  };
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <ul>
            <CoreConcepts
              img={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts
              img={CORE_CONCEPTS[1].image}
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
            />
            <CoreConcepts
              img={CORE_CONCEPTS[2].image}
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
            />
            <CoreConcepts
              img={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples: </h2>
          <menu>
            <TabButton onClick={() => handleClick("components")}>
              Component
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
