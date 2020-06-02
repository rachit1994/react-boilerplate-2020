import { Tooltip } from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import Link from 'components/Link/Link.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';
import settings from 'settings';

const { AJLink } = settings;

const ViewOnAJ: FC<SidebarInterface> = ({ data }) => (
    <Link
      isExternal
      externalHost={AJLink}
      to={`job/${get(data, 'title', '').split(' ').join('-')}/${get(data, 'id', '')}/?preview_job=true`}
    >
        <Tooltip
          title='View on Aasaanjobs website'
          placement='bottom'
          arrowPointAtCenter
        >
            <Button>View on AJ</Button>
        </Tooltip>
    </Link>
);

export default memo(ViewOnAJ);
