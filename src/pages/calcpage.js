import React from 'react';
import Calculator from '../components/calculator';

const CalcPage = () => (
  <div className="calcpage">
    <h2 className="calc-heading">
      Let&apos;s do some math!
    </h2>
    <Calculator previous="" operand="" current="" solved={false} />
  </div>
);

export default CalcPage;
