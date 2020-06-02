import { ColProps } from 'antd/lib/grid/index';
import { ModalProps } from 'antd/lib/modal/index';

interface CustomButton {
    col?: ColProps;
    modal?: string;
    modalProps?: ModalProps;
}

export default CustomButton;
