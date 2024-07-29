export interface ICalculatorI {
    name: string;
    type: string;
    key: string;
    function?: ((a: number, b: number) => number) | ((a: number) => number);
    icon?: string;
}

export type CalculatorInterfaceType = {
    [key: string]: ICalculatorI;
};

export type CalculatorGridType = Array<Array<ICalculatorI>>;
