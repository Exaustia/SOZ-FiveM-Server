import { FunctionComponent, SVGAttributes } from 'react';

export interface ICalculatorI {
    name: string;
    type: string;
    ico: FunctionComponent<SVGAttributes<SVGElement>> | string;
    key: string;
    function?: ((a: number, b: number) => number) | ((a: number) => number);
}

export type CalculatorInterfaceType = {
    [key: string]: ICalculatorI;
};

export type CalculatorGridType = Array<Array<ICalculatorI>>;
