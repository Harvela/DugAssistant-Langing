import NumberCounter from 'number-counter';
import React from 'react';

type CounterProps = {
  countervalue: number[];
};

const Counter: React.FC<CounterProps> = ({ countervalue }) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-8 md:gap-32">
      <div className="flex flex-row items-center gap-4 md:gap-6">
        <h2 className="text-[40px] font-bold md:text-[72px]">
          <NumberCounter end={countervalue[0]} delay={4} postFix="" />
        </h2>
        <h5 className="text-[10px] font-semibold md:text-[20px]">
          Ecoles et <br /> Institutions
        </h5>
      </div>

      <div className="flex flex-row items-center gap-4 md:gap-6">
        <h2 className="text-[40px] font-bold md:text-[72px]">
          <NumberCounter end={countervalue[1]} delay={4} postFix="" />
        </h2>
        <h5 className="text-[10px] font-semibold md:text-[20px]">
          Enseignant(e)s et <br /> Instituteur(trice)s
        </h5>
      </div>

      <div className="flex flex-row items-center gap-4 md:gap-6">
        <h2 className="text-[40px] font-bold md:text-[72px]">
          <NumberCounter end={countervalue[2]} delay={4} postFix="" />
        </h2>
        <h5 className="text-[10px] font-semibold md:text-[20px]">
          Fiches <br />
          Generees
        </h5>
      </div>
    </div>
  );
};

export default Counter;
