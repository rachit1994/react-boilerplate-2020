import { Row, Col, Typography } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const PartnerVisibility: FC<SidebarInterface> = () => (
    <Row>
        <Col span={6}>
            <Text>Partner Visibility</Text>
        </Col>
        <Col span={18}>
            PartnerVisibility
        </Col>
    </Row>
);

export default memo(PartnerVisibility);
