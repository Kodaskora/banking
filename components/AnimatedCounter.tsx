'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <>
      <CountUp duration={2} decimal=',' decimals={2} prefix='$' end={amount} />
    </>
  );
};

export default AnimatedCounter;
