import {
Row, Typography, Col, Space,
} from 'antd';
import React, { FC, memo } from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
// this is required for css prop to work
import styled from 'styled-components/macro';
import CSE from './CSE.component';
import DSEs from './DSEs.component';
import GFI from './GFI.component';
import KAM from './KAM.component';
import POCs from './POCs.component';
import Schedulers from './Schedulers.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const ImportantPeople: FC<SidebarInterface> = ({ data, openSidebar }) => (
  <Row>
      <Col span={24}>
          <Text type='danger'>Important People:</Text>
          <CSE data={data} openSidebar={openSidebar} />
          <KAM data={data} openSidebar={openSidebar} />
          <GFI data={data} openSidebar={openSidebar} />
          <Schedulers data={data} openSidebar={openSidebar} />
          <DSEs data={data} openSidebar={openSidebar} />
          <POCs data={data} openSidebar={openSidebar} />
          <Space css='margin-top: 16px' size={19}>
              <Text>Partner Visibility</Text>
              <Text>
                  {
                      data.partner_visibility.visibility ? 'Visible To All Partners' : 'Not Visible To All Partners'
                  }
              </Text>
          </Space>
      </Col>
  </Row>
);

export default memo(ImportantPeople);
