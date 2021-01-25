import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    // separated functions but can be done inline
    const increase = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrease = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>Counter</h1>
            <div className='counter-container'>
                <button onClick={decrease}><i className='fa fa-minus'></i></button>
                    <span style={{color: count >= 0 ? 'green' : 'red'}}>{count}</span>
                <button onClick={increase}><i className='fa fa-plus'></i></button>
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;