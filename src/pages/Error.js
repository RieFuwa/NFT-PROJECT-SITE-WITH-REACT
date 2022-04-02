import React from 'react';
import Header from '../components/Header';
function Error() {
  return <div>
    <Header></Header>
    <div className='error'>
    <h1 className='errorA'>SMILINFT</h1>
    <h2 className='errorA'>We encountered an unexpected error. Please check your internet connection and try again.</h2>
    </div>
  </div>;
}

export default React.memo(Error);
