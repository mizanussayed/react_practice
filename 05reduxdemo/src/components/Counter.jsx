import React, { useState } from 'react'
import Count from './Count'
import Button from './Button'

const Counter = ({count, onIncrement, onDecrement}) => {
    return (
        <div className='bg-gray-400 pt-2 mt-5'>
            <Count text={count} />
            <div className='flex gap-8 justify-between mx-4 p-5'>
                <Button type={'suncess'} handler={onIncrement}>Increase </Button>
                <Button handler={onDecrement}>Decrease</Button>
            </div>
        </div>
    )
}

export default Counter