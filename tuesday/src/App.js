import logo from "./logo.svg";
import "./App.css";
import upper, { text1, text2, text3 } from "./file1";
import person, { males, females } from "./file2";
import { Welcome } from "./file3";
import { MultiWelcome } from "./file3";
import { WelcomePerson } from "./file3";
import { persons } from "./file2";

const list = [...males, ...females];
const list2 = [...males, "kurt", "Helle", ...females, "Tina"];
console.log(list);
console.log(list2);

const { firstName, email, gender, lastName } = person;
//without spread
const personv2 = {
  email,
  firstName,
  friends: list,
  gender,
  lastName,
  phone: 123456,
};

console.log(personv2);

//With spread
const personV2 = [{ ...person, friends: list, phone: "123456" }];
console.log(personV2);

function App() {
  return (
    <div className="app">
      <h2>Ex 1</h2>
      <p>{upper("please uppercase me")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
      <h2>ex2</h2>
      <p>
        Firstname: {firstName}
        <br />
        Email {email}
      </p>

      <h2>Ex3</h2>
      <MultiWelcome />

      <h3>ex3b</h3>
      <WelcomePerson person={persons[0]} />

      <WelcomePerson person={persons[1]} />

      <WelcomePerson person={persons[2]} />
      <br />
    </div>
  );
}

export default App;
