import { Tooltip } from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import Link from 'components/Link/Link.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const DuplicateJob: FC<SidebarInterface> = ({ data }) => (
    <Link
      isExternal
      to={`job/${get(data, 'id', '')}/duplicate/${get(data, 'organization.id', '')}`}
    >
        <Tooltip
          title='Duplicate this job'
          placement='bottom'
          arrowPointAtCenter
        >
            <Button>Duplicate</Button>
        </Tooltip>
    </Link>
);

export default memo(DuplicateJob);
