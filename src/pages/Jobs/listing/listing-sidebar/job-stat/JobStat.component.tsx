import { Col, Statistic } from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import Row from './JobStat.style';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

// Todo: Need to update these values
const JobStat: FC<SidebarInterface> = ({ data }) => (
    <Row>
        <Col span={5} style={{ borderRight: 'solid 1px #DCDEE4' }}>
            <Statistic
              className='pt-8 pb-8'
              title='Total Applications'
              value={get(data, 'applications.count', 0)}
            />
        </Col>
        <Col span={5} style={{ borderRight: 'solid 1px #DCDEE4' }}>
            <Statistic
              className='pt-8 pb-8'
              title='Unscreened Applications'
              value={get(data, 'applications.count', 0)}
            />
        </Col>
        <Col span={5} style={{ borderRight: 'solid 1px #DCDEE4' }}>
            <Statistic
              className='pt-8 pb-8'
              title='Interviews Lined Up'
              value={get(data, 'applications.count', 0)}
            />
        </Col>
        <Col span={5} style={{ borderRight: 'solid 1px #DCDEE4' }}>
            <Statistic
              className='pt-8 pb-8'
              title='Interview Pending'
              value={get(data, 'applications.count', 0)}
            />
        </Col>
        <Col span={4}>
            <Statistic
              className='pt-8 pb-8'
              title='Need To Reschedule'
              value={get(data, 'applications.count', 0)}
            />
        </Col>
    </Row>
);

export default memo(JobStat);
