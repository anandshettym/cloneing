import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export const Loading = () => (
  <div className="flex justify-center items-center">
    <Loader type="Puff" color="#00BFFF" height={550} width={80} />
  </div>
);

export default Loading; // Keep this line