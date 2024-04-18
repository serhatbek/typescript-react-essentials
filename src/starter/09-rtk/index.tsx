import { useDispatch } from 'react-redux';
import { increase, decrease, reset, setStatus } from './counterSlice';

function Component() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Count: 0</h2>
      <h2>Status: Pending</h2>

      <div className='btn-container'>
        <button onClick={() => dispatch(increase)} className='btn'>
          Increment
        </button>
        <button onClick={() => dispatch(decrease)} className='btn'>
          Decrement
        </button>
        <button onClick={() => dispatch(reset)} className='btn'>
          Reset
        </button>
      </div>
      <div className='btn-container'>
        <button onClick={() => dispatch(setStatus)} className='btn'>
          Set Status to Active
        </button>
        <button className='btn' onClick={dispatch(dispatch(setStatus))}>
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;
