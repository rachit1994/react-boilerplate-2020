import { Select } from 'antd';
import { get } from 'lodash';
import React, { FC, memo, useState } from 'react';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Option } = Select;
const stateBorderColor: Record<string, string> = {
    OPEN: '#74D183',
    PAUSED: '#FCC675',
    CLOSED: '#F0B3B1',
    DRAFT: '#FCC675',
};

const fillColor: Record<string, string> = {
    OPEN: '#EAF8EC',
    PAUSED: '#FEF4E3',
    CLOSED: '#FDF3F3',
    DRAFT: '#FEF4E3',
};

const JobState: FC<SidebarInterface> = ({ data }) => {
    const [selectedOption, changeSelectedOption] = useState(get(data, 'state'));
    return (
        <Select
          defaultValue={get(data, 'state')}
          onChange={(val: string): void => changeSelectedOption(val)}
          style={{
              border: `solid 1px ${stateBorderColor[selectedOption]}`,
              background: fillColor[selectedOption],
            }}
          bordered={false}
          dropdownMatchSelectWidth={false}
        >
            <Option value='OPEN'>Open</Option>
            <Option value='CLOSED'>Closed</Option>
            <Option value='PAUSED'>Paused</Option>
            <Option value='DRAFT'>Draft</Option>
        </Select>
    );
};

export default memo(JobState);
