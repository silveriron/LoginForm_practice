import { useState } from "react";

const Average = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    console.log(number);
    setNumbers((prev) => {
      return [number, ...prev];
    });
    e.target.number.value = "";
  };

  const getAverage = (numbers) => {
    if (numbers.length === 0) {
      return 0;
    }
    let total = 0;
    numbers.map((number) => (total += +number));
    return total / numbers.length;
  };

  return (
    <>
      <form onSubmit={addNumber}>
        <input type="number" name="number" />
        <button>추가</button>
      </form>
      <ul>
        {numbers.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>
      <b>합계:</b> {getAverage(numbers)}
    </>
  );
};

export default Average;
