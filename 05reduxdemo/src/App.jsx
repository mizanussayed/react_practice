import { useDispatch, useSelector } from "react-redux";
import Counter from './components/Counter'
import Count from './components/Count'
import { decrease, increase } from "./features/counterSlice";
import { Products } from "./components/Products";


function App() {

  // const initialCounters = [
  //   {
  //     id: 1,
  //     value: 0,
  //   },
  //   {
  //     id: 2,
  //     value: 0,
  //   }
  // ]
  //const [counters, setCounters] = useState(initialCounters)

  // const handleIncrement = (counterId) => {
  //   const updatedCounter = counters.map(c => {
  //     if (c.id === counterId) {
  //       return {
  //         ...c,
  //         value: c.value + 1
  //       };
  //     }
  //     return c;
  //   })
  //   setCounters(updatedCounter);
  // };

  // const handleDecreament = (counterId) => {
  //   const updatedCounter = counters.map(c => {
  //     if (c.id === counterId) {
  //       return {
  //         ...c,
  //         value: c.value - 1
  //       };
  //     }
  //     return c;
  //   })
  //   setCounters(updatedCounter)
  // };

  // after using redux toolkit

  const counters = useSelector((store) => store.counters);
  const dispatch = useDispatch();

  const handleIncrement = (counterId) => {
    dispatch(increase(counterId))
  };

  const handleDecreament = (counterId) => {
    dispatch(decrease(counterId))
  };




  const totalCount = counters.reduce((sum, c) => sum + c.value, 0)



  return (
    <div className='mt-10 w-2/4 mx-auto'>
      <h2 className='bg-indigo-700 p-3 '>Redux npm i @reduxjx/toolkit react-redux</h2>
      {
        counters.map(c =>
          <Counter
            key={c.id}
            count={c.value}
            onIncrement={() => handleIncrement(c.id)}
            onDecrement={() => handleDecreament(c.id)}
          />
        )
      }
      <Count text={`total count : ${totalCount}`} />


      <Products />
    </div>
  )
}

export default App
