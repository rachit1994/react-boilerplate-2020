import { Row, Col, Typography } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const PartnerPoc: FC<SidebarInterface> = () => (
    <Row>
        <Col span={6}>
            <Text>Partner POCs</Text>
        </Col>
        <Col span={18}>
            PartnerPoc
        </Col>
    </Row>
);

export default memo(PartnerPoc);
