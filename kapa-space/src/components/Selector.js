import React from 'react';
import { Link } from 'react-router-dom';

function Selector() {
    return (
        <div>
            {/* <Link to='/'>
                <div className='w-14'>
                    <img src={bowl} alt='logo' className='logo object-fill'></img>
                </div>
            </Link> */}
            {/* <SearchBar></SearchBar> */}
            <div className='selectors flex justify-between h-10'>
                <Link to='/search' className='text-xl'>Search</Link>
                <Link to='/recommend' className='text-xl '>Recommend</Link>
                <Link to='/group' className='text-xl '>Group List</Link>
                <Link to='/go' className='text-xl underline decoration-border-pink decoration-solid underline-offset-4 text-sharp-pink'>Go!✌️</Link>
            </div>
        </div>
    );
}

export default Selector;