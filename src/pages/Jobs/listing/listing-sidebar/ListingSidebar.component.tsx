import {
    CloseOutlined,
} from '@ant-design/icons';
import {
 Row, Col, Typography,
} from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
// this is required for css prop to work
import styled from 'styled-components/macro';
import ApplicationActions from './application-actions/ApplicationActions.component';
import Communication from './communication/Communication.component';
import HeaderActions from './header-actions/HeaderActions.component';
import ImportantPeople from './important-people/ImportantPeople.component';
import SidebarInterface from './interfaces';
import InterviewSlots from './interview-slots/InterviewSlots.component';
import JobPricing from './job-pricing/JobPricing.component';
import JobStat from './job-stat/JobStat.component';
import StateActions from './state-actions/StateActions.component';
import Vacancies from './vacancies/Vacancies.component';


const { Title } = Typography;

const Sidebar: FC<SidebarInterface> = ({ data, openSidebar }) => {
    console.log('coming in sidebar', data);
    return (
        <Row gutter={16}>

            {/* Sidebar actions */}
            <Col span={24}>
                <Row gutter={8}>
                    <Col span={22}>
                        <HeaderActions
                          data={data}
                          openSidebar={openSidebar}
                        />
                    </Col>
                    <Col span={2}>
                        <CloseOutlined
                          onClick={(): void => openSidebar(false)}
                          style={{ fontSize: '1.25rem', color: 'black', float: 'right' }}
                        />
                    </Col>
                </Row>
            </Col>

            {/* Title */}
            <Col css='margin-top: 16px' span={24}>
                <Title level={2} style={{ textTransform: 'capitalize' }}>
                    { get(data, 'title', '') }
                </Title>
            </Col>

            {/* Job status */}
            <Col span={24} className='mb-30'>
                <StateActions
                  data={data}
                  openSidebar={openSidebar}
                />
            </Col>

            {/* Job stat */}
            <Col span={24} css='margin-top: 16px'>
                <JobStat
                  data={data}
                  openSidebar={openSidebar}
                />
            </Col>

            {/* Common Actions */}
            <Col span={24} className='mb-30'>
                <ApplicationActions
                  data={data}
                  openSidebar={openSidebar}
                />
            </Col>

            {/* Vacancies */}
            <Col span={24} className='mb-30'>
                <Vacancies
                  data={data}
                  openSidebar={openSidebar}
                />
            </Col>

            {/* Interview slots */}
            <Col span={24} className='mb-30'>
                <InterviewSlots
                  data={data}
                  openSidebar={openSidebar}
                />
            </Col>

            {/* Communication */}
            <Col span={24} className='mb-30'>
                <Communication
                  data={data}
                  openSidebar={openSidebar}
                />
            </Col>

            {/* Job Pricing */}
            <Col span={24} className='mb-30'>
              <JobPricing
                data={data}
                openSidebar={openSidebar}
              />
            </Col>

            {/* Important People */}
            <Col className='mb-30' span={24}>
                <ImportantPeople
                  data={data}
                  openSidebar={openSidebar}
                />
            </Col>
        </Row>
    );
};

export default memo(Sidebar);
