import React, { FC, memo } from 'react';
import Users from './Users.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const POCs: FC<SidebarInterface> = ({ data }) => (
    data.associated_partner_pocs && <Users users={data.associated_partner_pocs} section='Partner POCs' />
);

export default memo(POCs);
