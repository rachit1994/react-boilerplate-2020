import { FileAddOutlined } from '@ant-design/icons';
import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const AddAplication: FC<SidebarInterface> = () => (
    <Button type='primary' size='small'>
        <FileAddOutlined style={{ color: 'inherit' }} />
        Add Application
    </Button>
);

export default memo(AddAplication);
