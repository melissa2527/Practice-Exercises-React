import React, {useState, useEffect} from 'react';
import {QuoteCard} from './QuoteCard.jsx';
import './quotes.scss';

const QuoteGenerator = () => {
    const [quote, setQuote] = useState('');
    const [bgColor, setBgColor] = useState('');
    const [tweet, setTweet] = useState('');

    const colors = ['red', 'blue', 'yellow', 'purple'];

    const getQuote = () => {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => response.json())
            .then(data => {
                let quotes = data.quotes
                let num = Math.floor(Math.random() * quotes.length);
                let newQuote = quotes[num];
                setQuote(newQuote);
                console.log(getQuote)
            })
    }

    const getColor = () => {
        let colorNum = Math.floor(Math.random() * colors.length);
        let newBgColor = colors[colorNum]
        setBgColor(newBgColor);
            console.log(newBgColor)
    }

    const getTweet = () => {
        window.open("https://twitter.com/intent/tweet?text=" + getQuote());
    }

    
    useEffect(() => {
        getQuote();
        getColor();
        // getTweet();
    }, [])

    return (
        <div className='quote-container'>
            <div >
                <QuoteCard quote={quote} />
                <button style={{backgroundColor: bgColor}} onClick={getQuote}>New Quote</button>
                <span onClick={getTweet}><i className="fa fa-twitter"></i></span>
            </div>
        </div>
    )
}
export default QuoteGenerator;