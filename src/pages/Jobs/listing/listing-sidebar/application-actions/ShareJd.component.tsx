import { Select } from 'antd';
import React, { FC, memo } from 'react';
import { ShareJdSelect } from './ApplicationActions.style';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Option } = Select;

const ShareJd: FC<SidebarInterface> = () => (
    <ShareJdSelect
      defaultValue='shareJd'
      size='small'
    >
        <Option value='shareJd'>Share Jd</Option>
        <Option value='OPEN'>Job Links</Option>
    </ShareJdSelect>
);

export default memo(ShareJd);
