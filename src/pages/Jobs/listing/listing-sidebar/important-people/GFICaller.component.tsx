import { Row, Col, Typography } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const GFICaller: FC<SidebarInterface> = () => (
    <Row>
        <Col span={6}>
            <Text>GFI Caller</Text>
        </Col>
        <Col span={18}>
            GFICaller
        </Col>
    </Row>
);

export default memo(GFICaller);
