import "./App.css";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
// import { LoggedIn } from "./components/LoggedIn";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
// import { User } from "./components/User";
import { User } from "./components/context/User"
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
// import { Style } from "./components/Style";
// import { TestingBtn } from "./components/TestingBtn";

function App() {
  const personName = {
    fname: "Ayomide",
    lname: "Adeyemo",
  };

  const nameList = [
    {
      fname: "Femi",
      lname: "Sax",
    },
    {
      fname: "Emmy",
      lname: "Sax",
    },
    {
      fname: "Timmy",
      lname: "Sax",
    },
  ];
  return (
    <div className="App">
      <Greet name="FemiDev" isLoggedIn={true} />
      {/* <Greet name="FemiDev" messageCount={10} isLoggedIn={false} /> */}
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Federal Polytechnic Ede...</Heading>
      </Oscar>
      <Button
        label="Click me"
        handleClick={(event, id) => console.log("you clicked me", event, id)}
        names={nameList}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      {/* <Style
        style={{
          background: "green",
          padding: "10px 10px",
          color: "white",
          fontSize: "1rem",
        }}
      /> */}
      {/* <LoggedIn /> */}
      {/* <TestingBtn label='JustForTesting' handleClick={(event) => console.log('This btn is for testing', event)}/> */}
      {/* <User /> */}
      {/* <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider> */}
      <DomRef />
      {/* <MutableRef /> */}
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
