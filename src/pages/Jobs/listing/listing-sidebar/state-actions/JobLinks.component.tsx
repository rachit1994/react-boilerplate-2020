import { Select, Typography } from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Option } = Select;
const { Paragraph, Text } = Typography;

const JobLinks: FC<SidebarInterface> = ({ data }) => (
    <Select value='default' dropdownMatchSelectWidth={false}>
        <Option value='default'>Job Links</Option>
        <Option value='jobLinks'>
            <Text disabled>
                Click to Copy
            </Text>
            <Paragraph copyable>
                Job ID:
                { get(data, 'id', '') }
            </Paragraph>
            <Paragraph copyable>
                Org ID:
                { get(data, 'organization.id', '') }
            </Paragraph>
        </Option>
    </Select>
);

export default memo(JobLinks);
