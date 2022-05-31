import '../App.css'
import { Main } from "../components/Header";
import Balance from '../components/Balance';
import IncomeExpense from "../components/IncomeExpense";
import TransactionList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";
import { GlobalProvider } from '../components/context/GlobalState';

function Home() {
  return (
    <GlobalProvider>
    <Main />  
    <div className="container">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
   </GlobalProvider>
 );
}

export default Home

