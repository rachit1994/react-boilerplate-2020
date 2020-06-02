import { useQuery } from '@apollo/react-hooks';
import {
 Layout, PageHeader, Row, Col, Result,
} from 'antd';
import { gql } from 'apollo-boost';
import React, {
 memo, FC, useState,
} from 'react';
import dummyData from './fixtures/sample.data';
import getComponent from './getComponents';
import { ListingInterface } from './interfaces';
import { PageLayout } from './Styles.styles';
import ListSkelton from 'assests/skeltons/ListingSkelton.component';
import Pagination from 'components/ListingPagination/ListingPagination.component';
import { pageCreator } from 'utils/graphql/pageCreator';
import { pageParser } from 'utils/graphql/pagination';
import { gqlSearchParser } from 'utils/graphql/search';
import sorterParser from 'utils/graphql/sort';
import useHistory from 'utils/hooks/useHistory';

const {
 Content,
} = Layout;
const areEqual = (): boolean => true;

const ListingGrid: FC<ListingInterface> = ({
  children, title, dataSourceGql, Sidebar, dataLimit = 20,
}) => {
  const history = useHistory();
  const [selectedRow, changeSelectedRow] = useState({});
  const [openSidebar, changeSidebarState] = useState(false);
  const {
    loading, error, data,
    // TODO: change dataSourceGql to optional chaining after fixing jest
  } = useQuery((dataSourceGql && dataSourceGql.query) || gql``, {
    skip: !dataSourceGql || !dataSourceGql.query,
    variables: {
      filters: {},
      sort: sorterParser(),
      first: pageParser(dataLimit).first,
      after: pageParser(dataLimit).after,
      query: gqlSearchParser(),
    },
  });
  if (loading) {
    return (
      <div aria-label='loading-skeleton'>
        <ListSkelton />
      </div>
    );
  }
  if (error) {
    return (
      <Result
        status='500'
        title='500'
        subTitle='Sorry, Server returned an error.'
      />
    );
  }
  console.log('coming in listing', data, error, Result, dummyData);
  if (!Sidebar) {
    return (
      <h1>Sidebar is needed</h1>
    );
  }
  if (data.nodes && data.nodes.edges && data.nodes.edges.length < 10) {
    for (let i = 0; i < 10 - data.nodes.edges.length; i += 1) {
      data.nodes.edges.push({});
    }
    console.log('coming in >>>>>>', data.nodes.edges);
  }
  const [Table, Search] = getComponent(
    children,
    data,
    selectedRow,
    changeSelectedRow,
    openSidebar,
    changeSidebarState,
    Sidebar,
    history,
  );

  const paginationOnChange = (page: number): void => {
    history.push(pageCreator(page));
  };

  return (
    <PageLayout>
      <PageHeader
        title={title}
      >
        <Content>
          <Row gutter={{
              xs: 8, sm: 16, md: 24, lg: 32,
            }}
          >
            <Col span={6}>
              {
                Search
              }
            </Col>
            <Col span={18}>
              <Row justify='end' align='middle'>
                <Col>
                  <Pagination
                    total={data.nodes.totalCount}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    pageSize={dataLimit}
                    size='small'
                    onChange={paginationOnChange}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </PageHeader>
      <Content>
        {
          Table
        }
      </Content>
    </PageLayout>
  );
};

export default memo(ListingGrid, areEqual);
