import { Row, Col, Typography } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const Schedulers: FC<SidebarInterface> = () => (
    <Row>
        <Col span={6}>
            <Text>Schedulers</Text>
        </Col>
        <Col span={18}>
            Schedulers
        </Col>
    </Row>
);

export default memo(Schedulers);
