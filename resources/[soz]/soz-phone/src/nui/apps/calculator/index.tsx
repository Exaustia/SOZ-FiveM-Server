import { Transition } from '@headlessui/react';
import cn from 'classnames';
import { Route, Routes } from 'react-router-dom';

import { AppWrapper } from '../../ui/components/AppWrapper';
import { FullPage } from '../../ui/layout/FullPage';
import { Calculator } from './pages/Calculator';

export const CalculatorApp = () => {
    return (
        <FullPage withHeader={true} withNavBar={true} className={cn('bg-black')}>
            <Transition
                appear={true}
                show={true}
                enter="transition-all origin-[35%_10%] duration-300"
                enterFrom="scale-[0.0] opacity-0"
                enterTo="scale-100 opacity-100"
                leave="transition-all origin-[35%_10%] duration-300"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-[0.0] opacity-0"
            >
                <AppWrapper>
                    <Routes>
                        <Route index element={<Calculator />} />
                    </Routes>
                </AppWrapper>
            </Transition>
        </FullPage>
    );
};
