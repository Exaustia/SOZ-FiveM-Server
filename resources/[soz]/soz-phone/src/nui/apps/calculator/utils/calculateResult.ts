import { CalculatorInterface } from './constants';

const calculateResult = (a: number, b: number, operatorString: string) => {
    const operator = Object.values(CalculatorInterface).find((key) => {
        if (key.key === operatorString) {
            return key;
        }
    });

    if (!operator || !operator.function) return 0;

    const calcule = operator.function(a, b);
    return calcule;
};

export { calculateResult };
