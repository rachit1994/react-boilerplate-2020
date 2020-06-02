import {
 Typography, Row, Col, Button, Space,
} from 'antd';
import { get } from 'lodash';
import React, { FC } from 'react';
import StyledRow from './JobPricing.style';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Text } = Typography;

const JobPricing: FC<SidebarInterface> = ({ data }) => (
    <Row>
        <Col span={24} className='mb-10'>
            <Text type='danger'>Job Pricing</Text>
        </Col>
        <Col span={24}>
            <StyledRow gutter={16}>
                <Col span={9} style={{ borderBottom: 'solid 1px #DCDEE4' }}>
                    <Row>
                        <Col span={12}>
                            Plan
                        </Col>
                        <Col span={12}>
                            { get(data, 'pricing_plan_type', '') }
                        </Col>
                    </Row>
                </Col>
                <Col span={2} style={{ borderBottom: 'none' }} />
                <Col span={13} style={{ borderBottom: 'solid 1px #DCDEE4' }}>
                    <Row>
                        <Col span={12}>
                            Required Joining
                        </Col>
                        <Col span={12}>
                            { get(data, 'application_metrics.joinings', 'NA') }
                        </Col>
                    </Row>
                </Col>
                <Col span={9}>
                    <Row>
                        <Col span={12}>
                            Replacement
                        </Col>
                        <Col span={12}>
                            { get(data, 'application_metrics.joinings', 'NA') }
                        </Col>
                    </Row>
                </Col>
                <Col span={2} style={{ borderBottom: 'none' }} />
                <Col span={13}>
                    <Row>
                        <Col span={12}>
                            Invoice Clearance
                        </Col>
                        <Col span={12}>
                            { get(data, 'application_metrics.joinings', 'NA') }
                        </Col>
                    </Row>
                </Col>
                <Col span={9} className='pt-8 pb-8' style={{ background: '#EFF0F3' }}>
                    <div className='mb-10'>
                        <Text>Amount</Text>
                    </div>
                    <div>
                        <Text strong>Percentage | NA (0 To Any)</Text>
                    </div>
                    <div>
                        <Text strong>Flat Amount | NA (0 To Any)</Text>
                    </div>
                </Col>
                <Col span={2} />
                <Col span={13} className='pt-8 pb-8 mb-10' style={{ background: '#EFF0F3' }}>
                    <div className='mb-10'>
                        <Text>Closure</Text>
                    </div>
                    <div>
                        <Text strong>0 Calendar Days (100%)</Text>
                    </div>
                </Col>
                <Space className='mt-10'>
                    <Button type='primary' size='small'>
                        Update Job Pricing
                    </Button>
                    <Button type='primary' size='small'>
                        Partner Pricing
                    </Button>
                </Space>
            </StyledRow>
        </Col>
    </Row>
);

export default JobPricing;
