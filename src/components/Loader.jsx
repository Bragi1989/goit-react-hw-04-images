import React from 'react';
import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <Bars color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;