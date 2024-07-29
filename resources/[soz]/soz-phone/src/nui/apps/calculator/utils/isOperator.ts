const isOperator = (elm: string): boolean => {
    const match = elm.slice(-1).match(/[-+*/%]/g);
    return match ? true : false;
};

export default isOperator;
