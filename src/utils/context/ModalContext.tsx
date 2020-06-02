import {
 createContext, useState, useCallback,
} from 'react';

export interface ModalInterface {
    visible: boolean;
    values: Array<string>;
    changeValue?: (value: string) => void;
}
const modalValue: ModalInterface = {
    visible: false,
    values: [],
    changeValue: () => null,
};

const ModalContext = createContext(modalValue);

export const ModalProvider = ModalContext.Provider;

export const ModalConsumer = ModalContext.Consumer;

export const useModal = (): ModalInterface => {
    const defaultVal: string[] = [];
    const [values, updateValues] = useState(defaultVal);
    const setValues = useCallback((value: string): void => {
        if (value && value.length > 0 && !values.includes(value)) {
            const temp = values;
            temp.push(value);
            updateValues(temp);
        }
    }, [values]);
    return ({
        visible: false,
        values,
        changeValue: setValues,
    });
};

export default ModalContext;
