import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const ViewAllInterviews: FC<SidebarInterface> = () => (
    <Button type='primary' size='small'>
        View All Interviews
    </Button>
);

export default memo(ViewAllInterviews);
