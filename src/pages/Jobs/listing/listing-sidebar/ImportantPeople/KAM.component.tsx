import React, { FC, memo } from 'react';
import User from './User.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const KAM: FC<SidebarInterface> = ({ data }) => (
    data.key_account_manager && <User user={data.key_account_manager.user} section='KAM' />
);

export default memo(KAM);
