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
            'w-20 h-20  items-center rounded-full text-3xl flex justify-center text-white font-semibold',
            'hover:bg-opacity-50',
            {
                'bg-slate-900': calculatorInput.type === 'number',
                'bg-[#1A1A1A]': calculatorInput.type === 'function',
            },
        )}
        key={calculatorInput.key}
    >
        {calculatorInput.type === 'number' ? <span>{calculatorInput.ico as string}</span> : <calculatorInput.ico />}
    </button>
);

export default ButtonCalculator;
