function isOperator(value: string): boolean {
    return value.slice(-1).match(/[-+*/%]/g) !== null;
}

export { isOperator };
