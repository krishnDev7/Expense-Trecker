import { Fragment, useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";


function App() {
  const [expenses, setExpenses] = useState(null);

  useEffect(() => {
    if (expenses) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  useEffect(() => {
    const localExpenses = localStorage.getItem("expenses");
    if (localExpenses) {
      setExpenses(
        JSON.parse(localExpenses).map((el) => ({
          ...el,
          date: new Date(el.date),
        }))
      );
    }else{
      setExpenses([])
    }
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      {!expenses ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </Fragment>
      )}
    </div>
  );
}

export default App;
