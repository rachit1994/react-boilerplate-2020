import {
  Row, Typography, Space, Avatar,
} from 'antd';
import React, { FC, memo } from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
// this is required for css prop to work
import styled from 'styled-components/macro';
import { UserProps } from 'pages/Jobs/listing/listing-sidebar/ImportantPeople/interfaces';

const { Text } = Typography;

/* eslint-disable @typescript-eslint/camelcase */
const User: FC<UserProps> = ({ user, section }) => (
    <Row>
        <Space size={120}>
            <Text css='position:absolute'>{section}</Text>
            <Space css='margin-top: 16px' size={8}>
                <Avatar>{`${user.first_name.charAt(0).toUpperCase()}${user.last_name.charAt(0).toUpperCase()}`}</Avatar>
                <Text>{`${user.first_name} ${user.last_name}`}</Text>
            </Space>
        </Space>
    </Row>
);

export default memo(User);
