import React, {useState} from 'react'

const FizzBuzz = () => {
    const [count, setCount] = useState(5)
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{
                count % 15 === 0 ? 'FizzBuzz' :
                count % 5 === 0 ? 'Buzz' :
                count % 3 === 0 ? 'Fizz' :
                count
            }</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default FizzBuzz;