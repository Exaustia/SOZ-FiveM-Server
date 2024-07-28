import { ICalculatorI } from '@typings/calculator';
import cn from 'classnames';
import { memo, useCallback, useEffect, useState } from 'react';

import { AppContent } from '../../../ui/components/AppContent';
import ButtonCalculator from '../components/Button';
import { calculateResult } from '../utils/calculateResult';
import { CalculatorGrid, CalculatorInterface, operatorsInput } from '../utils/constants';

export const Calculator = memo(() => {
    const [calculatorInput, setCalculatorInput] = useState<string>('');
    const [displayCalculation, setDisplayCalculation] = useState<number>();
    const [displayLastCalculation, setDisplayLastCalculation] = useState<string>();
    const [total, setTotal] = useState<number>(0);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [operator, setOperator] = useState<string>('');

    const inputCalcuation = useCallback(
        (key: ICalculatorI) => {
            if (operatorsInput.includes(key.key)) {
                if (displayCalculation && calculatorInput !== '') {
                    const result = calculateResult(displayCalculation, parseFloat(calculatorInput), operator);

                    setTotal(result);
                    setDisplayCalculation(result);
                } else {
                    setDisplayCalculation((prev) => (calculatorInput ? parseInt(calculatorInput) : prev));
                }
                setOperator(key.key);
                setCalculatorInput('');
            } else {
                setCalculatorInput(calculatorInput + key.key);
            }
        },
        [calculatorInput, displayCalculation, operator],
    );

    const removeLastElement = useCallback(() => {
        if (calculatorInput === '') return;
        setCalculatorInput(calculatorInput.slice(0, -1));
    }, [calculatorInput]);

    const lastElmIsOperator = useCallback(() => calculatorInput.slice(-1).match(/[-+*/%]/g), [calculatorInput]);

    const clearCalculation = useCallback(() => {
        setCalculatorInput('');
        setShowResult(false);
        setOperator('');
        setDisplayCalculation(undefined);
        setDisplayLastCalculation('');
        setTotal(0);
    }, []);

    const equalCalculation = useCallback(() => {
        if (!displayCalculation || calculatorInput === '' || showResult) return;
        const result = calculateResult(displayCalculation, parseFloat(calculatorInput), operator);
        setTotal(result);
        setShowResult(true);
        setCalculatorInput('');
        setDisplayCalculation(result);
        setDisplayLastCalculation(`${displayCalculation} ${operator} ${calculatorInput}`);
    }, [calculatorInput, displayCalculation, operator]);

    const handleChange = useCallback(
        (key: ICalculatorI) => {
            if (operatorsInput.includes(key.key) && lastElmIsOperator()) {
                return;
            }

            switch (key.name) {
                case 'equal':
                    equalCalculation();
                    break;
                case 'clear':
                    clearCalculation();
                    break;
                case 'backspace':
                    removeLastElement();
                    break;
                default:
                    setShowResult(false);
                    inputCalcuation(key);
                    break;
            }
        },
        [inputCalcuation, lastElmIsOperator, removeLastElement],
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
        return () => {
            window.removeEventListener('keydown', handleKeyBoard);
        };
    }, [handleKeyBoard]);
    return (
        <AppContent scrollable={false}>
            <div className={cn('w-full h-full flex flex-col justify-end max-w-[383px]')}>
                <div className="w-full flex flex-col items-end justify-end overflow-hidden">
                    <span className={cn('font-semibold transition-all min-h-9 text-slate-400 text-2xl scale-90')}>
                        {showResult ? displayLastCalculation : displayCalculation ? displayCalculation + operator : ''}
                    </span>
                    <span className={cn('font-semibold transition-all min-h-9 h-9 text-white text-3xl')}>
                        {showResult ? total : calculatorInput}
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
