import { CalendarOutlined, PlusSquareOutlined } from '@ant-design/icons';
import {
 Row, Col, Typography,
} from 'antd';
// import { get } from 'lodash';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import Link from 'components/Link/Link.component';
import { Slots } from 'pages/Jobs/listing/Columns.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const InterviewSlots: FC<SidebarInterface> = ({ data }) => (
    <Row gutter={16}>
        <Col span={24} className='mb-10'>
            <Text type='danger'>Interview Slots</Text>
        </Col>
        <Col span={24} className='mb-10'>
            <Slots
              text=''
              record={data}
            />
            <div>
                <Text disabled>Max Interview Rounds: NA</Text>
            </div>
        </Col>
        <Col span={24}>
            <Row gutter={8}>
                <Button type='primary' size='small'>
                    <Link
                      isExternal
                      to={`job/${get(data, 'id', '')}/slots`}
                    >
                        <CalendarOutlined style={{ color: 'inherit', paddingRight: 5 }} />
                        View Slots
                    </Link>
                </Button>
                <Button type='primary' size='small'>
                    <Link
                      isExternal
                      to={`job/${get(data, 'id', '')}/slots`}
                    >
                        <PlusSquareOutlined style={{ color: 'inherit', paddingRight: 5 }} />
                        Add Slots
                    </Link>
                </Button>
            </Row>
        </Col>
    </Row>
);

export default memo(InterviewSlots);
