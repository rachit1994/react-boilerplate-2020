/* eslint-disable react/jsx-props-no-spreading */
import { Row, Col } from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import JobLinks from './JobLinks.component';
import JobStage from './JobStage.component';
import JobState from './JobState.component';
import Tickets from './Tickets.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const StateActions: FC<SidebarInterface> = (props) => (
    <Row justify='space-between' gutter={16}>
        <Col span={5}>
            <JobState {...props} />
        </Col>
        <Col span={7}>
            {
                get(props, 'data.stage', 'APPROVED') !== 'APPROVED'
                && (
                    <JobStage {...props} />
                )
            }
        </Col>
        <Col span={12}>
            <Row justify='end' gutter={16}>
                <Col>
                    <Tickets {...props} />
                </Col>
                <Col>
                    <JobLinks {...props} />
                </Col>
            </Row>
        </Col>
    </Row>
);

export default memo(StateActions);
