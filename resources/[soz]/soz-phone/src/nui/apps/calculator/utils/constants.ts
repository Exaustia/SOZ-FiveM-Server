import { CalculatorGridType, CalculatorInterfaceType } from '@typings/calculator';

export const CalculatorInterface: CalculatorInterfaceType = {
    MULTIPLY: {
        name: 'multiply',
        type: 'function',
        function: (a: number, b: number) => a * b,
        key: '*',
        icon: '×',
    },
    DIVIDE: {
        name: 'divide',
        type: 'function',
        key: '/',
        function: (a: number, b: number) => a / b,
        icon: '÷',
    },
    ADDITION: {
        name: 'addition',
        type: 'function',
        key: '+',
        function: (a: number, b: number) => a + b,
        icon: '+',
    },
    SUBSTRACTION: {
        name: 'subtraction',
        type: 'function',
        key: '-',
        function: (a: number, b: number) => a - b,
        icon: '-',
    },
    CLEAR: {
        name: 'clear',
        type: 'function',
        key: 'C',
        function: () => 0,
        icon: 'C',
    },
    BACKSPACE: {
        name: 'backspace',
        type: 'function',
        key: 'Backspace',
        function: (a: number) => {
            const str = a.toString();
            const res = str.slice(0, -1);
            return res === '' ? 0 : parseFloat(res);
        },
        icon: '⌫',
    },
    PERCENT: {
        name: 'percent',
        type: 'function',
        key: '%',
        function: (a: number, b: number) => (a / 100) * b,
        icon: '%',
    },
    EQUAL: {
        name: 'equal',
        type: 'function',
        key: 'Enter',
        function: (a: number, b: number) => b,
        icon: '=',
    },
    DOT: {
        name: 'dot',
        type: 'number',
        key: '.',
        icon: ',',
    },
    ZERO: {
        name: 'zero',
        type: 'number',
        key: '0',
        icon: '0',
    },
    ONE: {
        name: 'one',
        type: 'number',
        key: '1',
        icon: '1',
    },
    TWO: {
        name: 'two',
        type: 'number',
        key: '2',
        icon: '2',
    },
    THREE: {
        name: 'three',
        type: 'number',
        key: '3',
        icon: '3',
    },
    FOUR: {
        name: 'four',
        type: 'number',
        key: '4',
        icon: '4',
    },
    FIVE: {
        name: 'five',
        type: 'number',
        key: '5',
        icon: '5',
    },
    SIX: {
        name: 'six',
        type: 'number',
        key: '6',
        icon: '6',
    },
    SEVEN: {
        name: 'seven',
        type: 'number',
        key: '7',
        icon: '7',
    },
    EIGHT: {
        name: 'eight',
        type: 'number',
        key: '8',
        icon: '8',
    },
    NINE: {
        name: 'nine',
        type: 'number',
        key: '9',
        icon: '9',
    },
    DOUBLE_ZERO: {
        name: 'double_zero',
        type: 'number',
        key: '00',
        icon: '00',
    },
};

export const CalculatorGrid: CalculatorGridType = [
    [CalculatorInterface.CLEAR, CalculatorInterface.BACKSPACE, CalculatorInterface.PERCENT, CalculatorInterface.DIVIDE],
    [CalculatorInterface.SEVEN, CalculatorInterface.EIGHT, CalculatorInterface.NINE, CalculatorInterface.MULTIPLY],
    [CalculatorInterface.FOUR, CalculatorInterface.FIVE, CalculatorInterface.SIX, CalculatorInterface.SUBSTRACTION],
    [CalculatorInterface.ONE, CalculatorInterface.TWO, CalculatorInterface.THREE, CalculatorInterface.ADDITION],
    [CalculatorInterface.DOUBLE_ZERO, CalculatorInterface.ZERO, CalculatorInterface.DOT, CalculatorInterface.EQUAL],
];

export const operatorsInput = ['+', '-', '*', '/', '%'];
