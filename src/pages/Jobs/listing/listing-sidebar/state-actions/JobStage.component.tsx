import { Select } from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Option } = Select;

const JobStage: FC<SidebarInterface> = ({ data }) => (
    <Select defaultValue={get(data, 'stage')} dropdownMatchSelectWidth={false}>
        <Option value='UNAPPROVED'>UNAPPROVED</Option>
        <Option value='APPROVED'>APPROVED</Option>
        <Option value='REJECTED'>REJECTED</Option>
    </Select>
);

export default memo(JobStage);
