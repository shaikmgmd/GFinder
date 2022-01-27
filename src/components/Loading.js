import React from 'react';
import { TailSpin } from 'react-loader-spinner';
export const Loading = () => {
  return (
    <div class="flex-1 p-10 text-2xl font-bold">
      <div className="flex justify-center items-center">
          <TailSpin color="#00BFFF" height={550} width={80} />
      </div>
    </div>
  );
};
