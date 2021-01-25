import React from 'react';
import './quotes.scss';

export const QuoteCard = ({quote}) => {
    return (
        <div>
            <p className='quote'>"{quote.quote}"</p>
            <p className='author'>-{quote.author}</p>
        </div>
    )
}
