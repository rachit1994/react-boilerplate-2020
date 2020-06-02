import React, { FC, memo } from 'react';
import Users from './Users.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const DSEs: FC<SidebarInterface> = ({ data }) => (
    data.associated_dses && <Users users={data.associated_dses} section='DSEs' />
);

export default memo(DSEs);
