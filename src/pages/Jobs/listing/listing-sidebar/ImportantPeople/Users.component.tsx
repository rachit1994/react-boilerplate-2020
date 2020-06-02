import {
  Row, Typography, Space, Avatar,
} from 'antd';
import React, { FC, memo } from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
// this is required for css prop to work
import styled from 'styled-components/macro';
import { UsersProps } from 'pages/Jobs/listing/listing-sidebar/ImportantPeople/interfaces';

const { Text } = Typography;

/* eslint-disable @typescript-eslint/camelcase */
const Users: FC<UsersProps> = ({ users, section }) => (
    <>
      {
        users.length > 0
        && (
          <Row>
            <Space size={120}>
                <Text css='position:absolute'>{section}</Text>
                <Space css='margin-top: 16px' size={8}>
                    {users.map((obj) => (
                      obj
                      && obj.user
                      && (
                        <Avatar>
                          {`${obj?.user?.first_name?.charAt(0).toUpperCase()}${obj?.user?.last_name?.charAt(0).toUpperCase()}`}
                        </Avatar>
                      )
                    ))}
                </Space>
            </Space>
          </Row>
        )
      }
    </>
);

export default memo(Users);
