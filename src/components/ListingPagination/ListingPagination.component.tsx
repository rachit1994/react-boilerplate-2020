/* eslint-disable react/jsx-props-no-spreading */
import { Pagination } from 'antd';
import { PaginationProps } from 'antd/lib/pagination/index';
import React, { FC, memo } from 'react';
import { getCurrentPageNumber } from 'utils/graphql/pagination';

const ListingPagination: FC<PaginationProps> = (props) => (
    <Pagination
      {...props}
      current={getCurrentPageNumber()}
    />
);

export default memo(ListingPagination);
