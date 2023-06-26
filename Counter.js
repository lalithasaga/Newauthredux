import {useSelector,useDispatch} from  'react-redux';
import {counterActions} from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch =  useDispatch();
    const counter = useSelector(state => state.counter);
    const show = useSelector ((state) => state.auth.showCounter);
    
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increment(10));
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    }

    return (
        <main className={classes.counter}>
        <h1 className={classes.heading}>Redux Counter</h1>
        <div className={classes.value}>{counter}</div>
        <div>
        <button onClick={incrementHandler}> Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle counter</button>
        </main>
    );
};

export default Counter;