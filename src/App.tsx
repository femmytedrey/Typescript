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
import { User } from "./components/context/User";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { ListItem } from "./components/List";
import { RandomNumber } from "./components/RandomNumber";
import { Toast } from "./components/Toast";
import { CustomButton } from "./components/html/Button";
import { CustomInput } from "./components/html/Input";
import { CustomComponent } from "./components/CustomComponent";
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
      <ListItem
        items={[1, 2, 3, 4, 5, 6, 7]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive={true} />
      <Toast position="center" />
      <CustomInput />
      <CustomButton variant="primary" onClick={() => console.log('Clicked')}>Primary ButtonZ</CustomButton>
      <CustomComponent name="Nathaniel" isLoggedIn={true}/>

    </div>
  );
}

export default App;
