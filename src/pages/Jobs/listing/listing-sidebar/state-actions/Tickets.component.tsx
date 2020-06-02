import { Select } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Option, OptGroup } = Select;

const Tickets: FC<SidebarInterface> = () => (
    <Select defaultValue='tickets' dropdownMatchSelectWidth={false}>
        <Option value='tickets'>Tickets</Option>
        <OptGroup>
            <Option value='all'>All</Option>
            <Option value='unresolved'>Unresolved</Option>
            <Option value='resolved'>Resolved</Option>
        </OptGroup>
        <OptGroup>
            <Option value='employer_tickets'>Employer Tickets</Option>
            <Option value='partner_tickets'>Partner Tickets</Option>
            <Option value='primary_agency_tickets'>Primary Agency Tickets</Option>
        </OptGroup>
    </Select>
);

export default memo(Tickets);
