/* eslint-disable react/jsx-props-no-spreading */
import { Row, Col } from 'antd';
import React, { FC, memo } from 'react';
import Locations from './Locations.component';
import VacanciesButton from './VacancyButton.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const Actions: FC<SidebarInterface> = (props) => (
    <Row gutter={8}>
        <Col span={10}>
            <VacanciesButton
              {...props}
            />
        </Col>
        <Col span={14}>
            <Locations
              {...props}
            />
        </Col>
    </Row>
);

export default memo(Actions);
