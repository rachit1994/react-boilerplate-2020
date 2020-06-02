import React, { FC, memo } from 'react';
import User from './User.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const CSE: FC<SidebarInterface> = ({ data }) => (
    data.associated_cse && <User user={data.associated_cse.user} section='CSE' />
);

export default memo(CSE);
