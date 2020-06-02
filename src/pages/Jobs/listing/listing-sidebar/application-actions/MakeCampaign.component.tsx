import { MessageOutlined } from '@ant-design/icons';
import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const MakeCampaign: FC<SidebarInterface> = () => (
    <Button type='primary' size='small'>
        <MessageOutlined style={{ color: 'inherit' }} />
        Make Campaign
    </Button>
);

export default memo(MakeCampaign);
