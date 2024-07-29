import { ICalculatorI } from '@typings/calculator';
import classNames from 'classnames';

const ButtonCalculator = ({
    handleChange,
    calculatorInput,
}: {
    handleChange: (key: ICalculatorI) => void;
    calculatorInput: ICalculatorI;
}) => (
    <button
        onClick={() => handleChange(calculatorInput)}
        className={classNames(
            'rounded-full p-0 h-20 w-20 text-3xl text-white font-semibold border-none inline-block',
            'hover:bg-opacity-50',
            {
                'bg-slate-900 ': calculatorInput.type === 'number',
                'bg-[#1A1A1A] ': calculatorInput.type === 'function',
            },
        )}
        key={calculatorInput.key}
    >
        {calculatorInput.icon}
    </button>
);

export default ButtonCalculator;
