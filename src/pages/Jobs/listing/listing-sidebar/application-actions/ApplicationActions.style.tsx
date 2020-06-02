import { Row, Select } from 'antd';
import styled from 'styled-components';

export const ActionRow = styled(Row)`
    .ant-col {
        padding: 8px 8px 8px 0px !important;
    }
`;

export const ShareJdSelect = styled(Select)`
    color: #0B5FCC;
    
    .ant-select-selector {
        background-color: #EFF5FE !important;
        border: none !important;
    }
`;

export default ActionRow;
