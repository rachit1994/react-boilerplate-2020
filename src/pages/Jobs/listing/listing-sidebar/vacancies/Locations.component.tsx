import {
 Dropdown, Menu, Typography, Row, Col,
} from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const { Item } = Menu;
const { Text, Paragraph } = Typography;

const Locations: FC<SidebarInterface> = ({ data }) => {
    const locations = data.locations
        && Array.isArray(data.locations)
        && data.locations.filter((obj: any) => {
            if (obj.place.locality) {
                return obj;
            }
            return false;
        });
    return (
    <>
    {
        locations && Array.isArray(locations) && locations.length > 0
        && (
            <Dropdown
              overlay={locations.length > 1
                ? (
                <Menu>
                    {
                        // TODO: replace with optional chaining
                        locations.map((obj: any) => (
                            obj && obj.place && obj.place.locality
                            && <Item key={get(obj, 'place.locality')}>{get(obj, 'place.locality')}</Item>
                        ))
                    }
                </Menu>
            ) : <></>}
            >
                <Button style={{ boxSizing: 'content-box', height: 44 }}>
                    <Row>
                        <Col span={24} style={{ textAlign: 'left' }}>
                            <Text>
                                {
                                    get(locations[0], 'place.city', null)
                                    ? get(locations[0], 'place.city', null)
                                    : get(locations[1], 'place.city')
                                }
                            </Text>
                        </Col>
                        <Col span={20}>
                            <Paragraph
                              ellipsis={{
                                rows: 1,
                                expandable: false,
                                suffix: locations.length > 1
                                    ? `...+${String(locations.length - 1)}` : undefined,
                                }}
                              strong
                              style={{ textAlign: 'left' }}
                            >
                                {
                                    get(locations[0], 'place.locality', '')
                                }
                            </Paragraph>
                        </Col>
                    </Row>
                </Button>
            </Dropdown>
        )
    }

    </>
);
};

export default memo(Locations);
