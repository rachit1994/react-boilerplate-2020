/* eslint-disable react/jsx-props-no-spreading */
import {
 Row, Col, Typography,
} from 'antd';
import React, { FC, memo } from 'react';
import Actions from './Actions.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const Vacancies: FC<SidebarInterface> = (props) => (
    <Row>
        <Col span={24} className='mb-10'>
            <Text type='danger'>Vacancies</Text>
        </Col>
        <Col span={24}>
            <Actions {...props} />
        </Col>
    </Row>
);

export default memo(Vacancies);
