import { ICalculatorI } from '@typings/calculator';
import cn from 'classnames';
import { memo, useCallback, useEffect, useState } from 'react';

import { AppContent } from '../../../ui/components/AppContent';
import ButtonCalculator from '../components/Button';
import { calculateResult } from '../utils/calculateResult';
import { CalculatorGrid, CalculatorInterface, operatorsInput } from '../utils/constants';
import isOperator from '../utils/isOperator';

const Calculator = () => {
    const [calculatorInput, setCalculatorInput] = useState<string>('');
    const [displayCalculation, setDisplayCalculation] = useState<number>();
    const [displayLastCalculation, setDisplayLastCalculation] = useState<string>();
    const [displayTotal, setDisplayTotal] = useState<number>(0);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [operator, setOperator] = useState<string>('');

    const handleCalculation = useCallback(
        (key: ICalculatorI) => {
            if (operatorsInput.includes(key.key)) {
                if (displayCalculation && calculatorInput !== '') {
                    const result = calculateResult(displayCalculation, parseFloat(calculatorInput), operator);
                    setDisplayTotal(result);
                    setDisplayCalculation(result);
                } else setDisplayCalculation((prev) => (calculatorInput ? parseInt(calculatorInput) : prev));

                setOperator(key.key);
                setCalculatorInput('');
            } else setCalculatorInput(calculatorInput + key.key);
        },
        [calculatorInput, displayCalculation, operator],
    );

    const handleBackspace = useCallback(() => {
        if (calculatorInput === '') return;
        setCalculatorInput(calculatorInput.slice(0, -1));
    }, [calculatorInput]);

    const handleClear = useCallback(() => {
        setCalculatorInput('');
        setShowResult(false);
        setOperator('');
        setDisplayCalculation(undefined);
        setDisplayTotal(0);
    }, []);

    const handleEqual = useCallback(() => {
        if (!displayCalculation || calculatorInput === '' || showResult) return;
        const result = calculateResult(displayCalculation, parseFloat(calculatorInput), operator);
        setDisplayTotal(result);
        setShowResult(true);
        setCalculatorInput('');
        setDisplayLastCalculation(`${displayCalculation} ${operator} ${calculatorInput}`);
        setDisplayCalculation(result);
    }, [calculatorInput, displayCalculation, operator, showResult]);

    const handleChange = useCallback(
        (key: ICalculatorI) => {
            if (operatorsInput.includes(key.key) && isOperator(calculatorInput)) return;

            switch (key.name) {
                case 'equal':
                    handleEqual();
                    break;
                case 'clear':
                    handleClear();
                    break;
                case 'backspace':
                    handleBackspace();
                    break;
                default:
                    setShowResult(false);
                    handleCalculation(key);
                    break;
            }
        },
        [calculatorInput, handleEqual, handleClear, handleBackspace, handleCalculation],
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
        window.addEventListener('keydown', handleKeyBoard, false);
        return () => window.removeEventListener('keydown', handleKeyBoard);
    }, [handleKeyBoard]);

    return (
        <AppContent>
            <div className={cn('w-full h-full flex flex-col justify-center m-auto max-w-[370px]')}>
                <div className={cn('w-full flex flex-col')}>
                    <div className="pt-10 flex justify-center">
                        <div className="w-full flex flex-col items-end justify-end overflow-hidden">
                            <span
                                className={cn('font-semibold transition-all min-h-9 text-slate-400 text-2xl scale-90')}
                            >
                                {showResult
                                    ? displayLastCalculation
                                    : displayCalculation
                                    ? displayCalculation + operator
                                    : ''}
                            </span>
                            <span className={cn('font-semibold transition-all min-h-9 text-white text-3xl')}>
                                {showResult ? displayTotal : calculatorInput}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid m-auto gap-4 mt-8">
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
};

export default memo(Calculator);
