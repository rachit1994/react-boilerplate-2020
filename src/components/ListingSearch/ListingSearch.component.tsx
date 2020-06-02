/* eslint-disable react/jsx-props-no-spreading */
import { Input } from 'antd';
import { SearchProps } from 'antd/lib/input/index';
import React, { FC } from 'react';
import { SearchInterface } from './interfaces';
import { gqlSearchParser } from 'utils/graphql/search';

const { Search } = Input;

const ListingSearch: FC<SearchProps & SearchInterface> = ({
  placeholder = 'Search',
  ...rest
}) => (
  <Search
    placeholder={placeholder}
    defaultValue={gqlSearchParser() || undefined}
    size='large'
    {...rest}
  />
);

export default ListingSearch;
