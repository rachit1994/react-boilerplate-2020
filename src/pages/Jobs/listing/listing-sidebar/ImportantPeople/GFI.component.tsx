import React, { FC, memo } from 'react';
import User from './User.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const GFI: FC<SidebarInterface> = ({ data }) => (
    data.recruitment_support && <User user={data.recruitment_support.user} section='GFI Caller' />
);

export default memo(GFI);
