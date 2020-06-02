import {
 Row, Col, Typography,
} from 'antd';
import React, { FC, memo } from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
// this is required for css prop to work
import styled from 'styled-components/macro';
import EmailClient from './EmailClient.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const Communication: FC<SidebarInterface> = () => (
    <Row>
        <Col span={24} className='mb-10'>
            <Text type='danger'>Communication</Text>
        </Col>
        <Col span={24} css='margin-top: 12px'>
            <EmailClient
              data={null}
              openSidebar={(): null => null}
            />
        </Col>
    </Row>
);

export default memo(Communication);
