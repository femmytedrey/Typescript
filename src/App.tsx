import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    fname: "Ayomide",
    lname: "Adeyemo",
  };

  const nameList = [
    {
      fname: 'Femi',
      lname: 'Sax'
    },
    {
      fname: 'Emmy',
      lname: 'Sax'
    },
    {
      fname: 'Timmy',
      lname: 'Sax'
    }
  ]
  return (
    <div className="App">
      {/* <Greet name="FemiDev" messageCount={100} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      <Status status = 'success' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Federal Polytechnic Ede...</Heading>
      </Oscar>
    </div>
  );
}

export default App;
