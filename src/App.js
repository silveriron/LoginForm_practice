import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Login from "./components/Login/Login";
import EmptyInputModal from "./components/Modal/EmptyInputModal";
import NewPeople from "./components/NewPeople/NewPeople";
import People from "./components/People/People";

const App = () => {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "홍길동",
      age: 35,
    },
    {
      id: 2,
      name: "김철수",
      age: 24,
    },
    {
      id: 3,
      name: "김영희",
      age: 29,
    },
  ]);

  const [emptyName, setEmptyName] = useState(false);
  const [emptyAge, setEmptyAge] = useState(false);

  const addPeople = (person) => {
    setPeople((prev) => {
      return [person, ...prev];
    });
  };

  const resetModal = () => {
    setEmptyName(false);
    setEmptyAge(false);
  };

  return (
    <>
      <Login />

      {/* usestate, props, modal 연습
    <EmptyInputModal emptyName={emptyName} emptyAge={emptyAge} resetModal={resetModal} />
    <NewPeople addPeople={addPeople} setEmptyName={setEmptyName} setEmptyAge={setEmptyAge} />
    <People people={people}/>
     */}
    </>
  );
};

export default App;
