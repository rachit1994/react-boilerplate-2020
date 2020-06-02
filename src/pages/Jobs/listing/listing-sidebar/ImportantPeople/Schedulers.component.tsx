import React, { FC, memo } from 'react';
import Users from './Users.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const Schedulers: FC<SidebarInterface> = ({ data }) => (
    data.point_of_contacts && <Users users={data.associated_schedulers} section='Schedulers' />
);

export default memo(Schedulers);
