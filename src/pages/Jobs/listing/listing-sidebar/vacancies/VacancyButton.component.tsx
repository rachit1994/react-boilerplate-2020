import { EditOutlined } from '@ant-design/icons';
import { Row, Col, Typography } from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const VacanciesButton: FC<SidebarInterface> = ({ data }) => (
    <Button
      style={{ boxSizing: 'content-box', height: 44 }}
      disabled={data.state === 'CLOSED' || data.state === 'REJECTED'}
      modal='components/Button/Button.component'
    >
        <Row>
            <Col span={24} style={{ textAlign: 'left' }}>
                <Text>VACANCIES </Text>
            </Col>
            <Col data-testid='vacancies' span={20}>
                <Text strong style={{ float: 'left' }}>
                    {get(data, 'vacancies', '')}
                </Text>
            </Col>
            {
                (data.state !== 'CLOSED'
                || data.state !== 'REJECTED')
                && (
                    <Col span={4}>
                        <EditOutlined />
                    </Col>
                )
            }
        </Row>
    </Button>
);

export default memo(VacanciesButton);
