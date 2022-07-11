import React, { useEffect } from 'react';

type Props = {
  num: Number;
};

const Test = (prop: Props) => {
  useEffect(() => {
    console.log('test componen rendered');
  });

  return (
    <>
      <div>test</div>
      {prop.num}
    </>
  );
};

export default Test;
