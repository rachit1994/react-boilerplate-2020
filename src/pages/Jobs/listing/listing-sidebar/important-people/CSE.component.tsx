import {
 Row, Col, Typography, Select,
} from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;
const { Option } = Select;

const CSE: FC<SidebarInterface> = ({ data }) => (
    <Row>
        <Col span={6}>
            <Text>CSE</Text>
        </Col>
        <Col span={18}>
            <Select
              defaultActiveFirstOption
              dropdownMatchSelectWidth={false}
              defaultValue='cse'
            >
                <Option value='cse'>
                    { get(data, 'associated_cse.user.first_name', 'NA') }
                </Option>
            </Select>
        </Col>
    </Row>
);

export default memo(CSE);
