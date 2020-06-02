import { Select } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Option } = Select;

const EmailClient: FC<SidebarInterface> = () => (
    <Select defaultValue='default' dropdownMatchSelectWidth={false}>
        <Option value='default'>Email Clients</Option>
        <Option value='requestSlotMail'>Request Slot Mail</Option>
        <Option value='applicationCVMail'>Application CV Mail</Option>
        <Option value='dfiDummaryMail'>GFI Summary Mail</Option>
        <Option value='feedbackMail'>Feedback Mail</Option>
    </Select>
);

export default memo(EmailClient);
