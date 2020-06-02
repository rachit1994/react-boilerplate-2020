import { Row, Col, Typography } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const ClientPOC: FC<SidebarInterface> = () => (
    <Row>
        <Col span={6}>
            <Text>Client POCs</Text>
        </Col>
        <Col span={18}>
            ClientPOC
        </Col>
    </Row>
);

export default memo(ClientPOC);
