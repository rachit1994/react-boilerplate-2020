import { Row, Col, Typography } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const DSE: FC<SidebarInterface> = () => (
    <Row>
        <Col span={6}>
            <Text>DSE</Text>
        </Col>
        <Col span={18}>
            DSE
        </Col>
    </Row>
);

export default memo(DSE);
