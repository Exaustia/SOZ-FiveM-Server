import BackspaceIco from '../assets/backspace.svg';
import CIco from '../assets/c.svg';
import DivideIco from '../assets/divide.svg';
import EqualsIco from '../assets/equals.svg';
import MinusIco from '../assets/minus.svg';
import PlusIco from '../assets/plus.svg';
import XIco from '../assets/x.svg';

const generateIcon = (name: string) => {
    switch (name) {
        case 'multiply':
            return <XIco />;
        case 'divide':
            return <DivideIco />;
        case 'addition':
            return <PlusIco />;
        case 'subtraction':
            return <MinusIco />;
        case 'clear':
            return <CIco />;
        case 'backspace':
            return <BackspaceIco />;
        case 'equal':
            return <EqualsIco />;
        default:
            return null;
    }
};

export default generateIcon;
