import { ICalculatorI } from '@typings/calculator';
import cn from 'classnames';
import { memo, useCallback, useEffect, useState } from 'react';

import { AppContent } from '../../../ui/components/AppContent';
import ButtonCalculator from '../components/Button';
import { CalculatorGrid, CalculatorInterface, operatorsInput } from '../utils/constants';
import { isOperator } from '../utils/isOperator';

export const Calculator = memo(() => {
    const [resultCalculation, setResultCalculation] = useState<number>(0);
    const [calculatorInput, setCalculatorInput] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false);

    const calculateResult = useCallback(
        (e: string) => {
            const elements = e.split(/[-+*/%]/).filter(Boolean);
            const operators = e.match(/[-+*/%]/g) || [];

            if (operators[operators.length - 1] === '%') {
                const r = (CalculatorInterface.POURCENT.function as (a: number) => number)(resultCalculation);
                setResultCalculation(r);
                return;
            }

            let element = 0;
            const calculations = elements.map((elm, index) => {
                if (index === 0) {
                    element = parseFloat(elm);
                    return parseFloat(elm);
                }

                const operator = operators[index - 1];

                const fnOperator = Object.values(CalculatorInterface).find((item) => item.key === operator);

                if (!fnOperator || !fnOperator.function) return;
                element = 0;
                if (fnOperator.key === '%') {
                    element = (fnOperator.function as (a: number) => number)(element);
                } else {
                    element = (fnOperator.function as (a: number, b: number) => number)(element, parseFloat(elm));
                }

                return element;
            });
            setResultCalculation(calculations.pop() || 0);
        },
        [resultCalculation],
    );

    const executeCalculation = useCallback(
        (key: ICalculatorI) => {
            setShowResult(false);
            const newCalculatorInput = `${calculatorInput}${key.key}`;
            setCalculatorInput(newCalculatorInput);
            calculateResult(newCalculatorInput);
        },
        [calculateResult, calculatorInput],
    );

    const removeLastElement = useCallback(() => {
        setCalculatorInput((prev) => prev.slice(0, -1));
        calculateResult(calculatorInput.slice(0, -1));
    }, [calculateResult, calculatorInput]);

    const handleChange = useCallback(
        (key: ICalculatorI) => {
            if (operatorsInput.includes(key.key))
                if (isOperator(calculatorInput) || calculatorInput.length === 0) return;

            switch (key.name) {
                case 'equal':
                    setShowResult(true);
                    break;
                case 'clear':
                    setResultCalculation(0);
                    setCalculatorInput('');
                    break;
                case 'backspace':
                    removeLastElement();
                    break;
                default:
                    executeCalculation(key);
                    break;
            }
        },
        [executeCalculation, removeLastElement],
    );

    const handleKeyBoard = useCallback(
        (e: KeyboardEvent) => {
            e.preventDefault();
            Object.values(CalculatorInterface).find((key) => {
                if (key.key === e.key) {
                    handleChange(key);
                }
            });
        },
        [handleChange],
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyBoard, false);
        return () => {
            document.removeEventListener('keydown', handleKeyBoard);
        };
    }, [handleKeyBoard]);

    return (
        <AppContent scrollable={false}>
            <div className={cn('w-full h-full flex flex-col justify-end max-w-[383px]')}>
                <div className={cn('pt-10 px-5 w-full flex flex-col items-end justify-end')}>
                    <span
                        className={cn('font-semibold transition-all h-9 max-h-9 ', {
                            'text-slate-400 text-2xl scale-90': showResult,
                            'text-white text-3xl': !showResult,
                        })}
                    >
                        {calculatorInput}
                    </span>
                    <span
                        className={cn(' font-semibold transition-all h-9 max-h-9', {
                            'text-slate-400 text-2xl scale-90': !showResult,
                            'text-white text-3xl': showResult,
                        })}
                    >
                        {resultCalculation}
                    </span>
                </div>
                <div className="grid gap-y-4 mt-8">
                    {CalculatorGrid.map((item, key) => (
                        <div key={key} className={cn('grid grid-cols-4 m-auto gap-x-4')}>
                            {item.map((i, _index) => {
                                return (
                                    <ButtonCalculator key={_index} calculatorInput={i} handleChange={handleChange} />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </AppContent>
    );
});
