import { CalculatorGridType, CalculatorInterfaceType } from '@typings/calculator';

import backspaceIco from '../assets/backspace.svg';
import cIco from '../assets/c.svg';
import divideIco from '../assets/divide.svg';
import equalsIco from '../assets/equals.svg';
import minusIco from '../assets/minus.svg';
import percentIco from '../assets/percent.svg';
import plusIco from '../assets/plus.svg';
import xIco from '../assets/x.svg';

export const CalculatorInterface: CalculatorInterfaceType = {
    MULTIPLY: {
        name: 'multiply',
        type: 'function',
        ico: xIco,
        function: (a: number, b: number) => a * b,
        key: '*',
    },
    DIVIDE: {
        name: 'divide',
        type: 'function',
        ico: divideIco,
        key: '/',
        function: (a: number, b: number) => a / b,
    },
    ADDITION: {
        name: 'addition',
        type: 'function',
        ico: plusIco,
        key: '+',
        function: (a: number, b: number) => a + b,
    },
    SUBSTRACTION: {
        name: 'subtraction',
        type: 'function',
        ico: minusIco,
        key: '-',
        function: (a: number, b: number) => a - b,
    },
    POURCENT: {
        name: 'pourcent',
        type: 'function',
        ico: percentIco,
        key: '%',
        function: (a: number) => a / 100,
    },
    CLEAR: {
        name: 'clear',
        type: 'function',
        ico: cIco,
        key: 'C',
        function: () => 0,
    },
    BACKSPACE: {
        name: 'backspace',
        type: 'function',
        ico: backspaceIco,
        key: 'Backspace',
        function: (a: number) => {
            const str = a.toString();
            const res = str.slice(0, -1);
            return res === '' ? 0 : parseFloat(res);
        },
    },
    EQUAL: {
        name: 'equal',
        type: 'function',
        ico: equalsIco,
        key: 'Enter',
        function: (a: number, b: number) => b,
    },
    DOT: {
        name: 'dot',
        type: 'number',
        key: '.',
        ico: ',',
    },
    ZERO: {
        name: 'zero',
        type: 'number',
        key: '0',
        ico: '0',
    },
    ONE: {
        name: 'one',
        type: 'number',
        key: '1',
        ico: '1',
    },
    TWO: {
        name: 'two',
        type: 'number',
        key: '2',
        ico: '2',
    },
    THREE: {
        name: 'three',
        type: 'number',
        key: '3',
        ico: '3',
    },
    FOUR: {
        name: 'four',
        type: 'number',
        key: '4',
        ico: '4',
    },
    FIVE: {
        name: 'five',
        type: 'number',
        key: '5',
        ico: '5',
    },
    SIX: {
        name: 'six',
        type: 'number',
        key: '6',
        ico: '6',
    },
    SEVEN: {
        name: 'seven',
        type: 'number',
        key: '7',
        ico: '7',
    },
    EIGHT: {
        name: 'eight',
        type: 'number',
        key: '8',
        ico: '8',
    },
    NINE: {
        name: 'nine',
        type: 'number',
        key: '9',
        ico: '9',
    },
    DOUBLE_ZERO: {
        name: 'double zero',
        type: 'number',
        key: '00',
        ico: '00',
    },
};

export const CalculatorGrid: CalculatorGridType = [
    [
        CalculatorInterface.CLEAR,
        CalculatorInterface.BACKSPACE,
        CalculatorInterface.POURCENT,
        CalculatorInterface.DIVIDE,
    ],
    [CalculatorInterface.SEVEN, CalculatorInterface.EIGHT, CalculatorInterface.NINE, CalculatorInterface.MULTIPLY],
    [CalculatorInterface.FOUR, CalculatorInterface.FIVE, CalculatorInterface.SIX, CalculatorInterface.SUBSTRACTION],
    [CalculatorInterface.ONE, CalculatorInterface.TWO, CalculatorInterface.THREE, CalculatorInterface.ADDITION],
    [CalculatorInterface.DOUBLE_ZERO, CalculatorInterface.ZERO, CalculatorInterface.DOT, CalculatorInterface.EQUAL],
];

export const operatorsInput = ['+', '-', '*', '/', '%'];
