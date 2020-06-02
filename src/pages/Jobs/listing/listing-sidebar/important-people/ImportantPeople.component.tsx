/* eslint-disable react/jsx-props-no-spreading */
import { Row, Col } from 'antd';
import React, { FC, memo } from 'react';
import ClientPoc from './ClientPoc.component';
import CSE from './CSE.component';
import DSE from './DSE.component';
import GFI from './GFICaller.component';
import KAM from './KAM.component';
import PartnerPoc from './PartnerPoc.component';
import PartnerVisibility from './PartnerVisibility.component';
import Schedulers from './Schedulers.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const ImportantPeople: FC<SidebarInterface> = (props) => (
    <Row>
        <Col span={24}>
            <CSE {...props} />
        </Col>
        <Col span={24}>
            <KAM {...props} />
        </Col>
        <Col span={24}>
            <GFI {...props} />
        </Col>
        <Col span={24}>
            <Schedulers {...props} />
        </Col>
        <Col span={24}>
            <DSE {...props} />
        </Col>
        <Col span={24}>
            <PartnerPoc {...props} />
        </Col>
        <Col span={24}>
            <ClientPoc {...props} />
        </Col>
        <Col span={24}>
            <PartnerVisibility {...props} />
        </Col>
    </Row>
);

export default memo(ImportantPeople);
