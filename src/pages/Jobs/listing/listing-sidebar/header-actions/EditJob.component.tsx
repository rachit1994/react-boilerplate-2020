import { Tooltip } from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import Link from 'components/Link/Link.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const EditButton: FC<SidebarInterface> = ({ data }) => (
    <Link
      isExternal
      to={`job/${get(data, 'id', '')}/edit/${get(data, 'organization.id', '')}`}
    >
        <Tooltip
          title='Edit'
          placement='bottom'
          arrowPointAtCenter
        >
            <Button>Edit</Button>
        </Tooltip>
    </Link>
);

export default memo(EditButton);
