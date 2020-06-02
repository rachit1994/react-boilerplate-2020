import {
    EditOutlined, CalendarOutlined, FileAddOutlined,
    UserAddOutlined, PhoneTwoTone, CalendarTwoTone,
    FileTextTwoTone, FlagOutlined,
} from '@ant-design/icons';
import {
 Typography, Button, Row, Col, Tooltip,
} from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import WalkInSVG from 'assests/images/walkIn.svg';
import NoSlotsAvailableSVG from 'assests/images/noSlots.svg';
// import { Link } from 'react-router-dom';
import Link from 'components/Link/Link.component';
import VacanciesActions from 'pages/Jobs/listing/listing-sidebar/vacancies/Actions.component';
import numberSuffix from 'utils/salary/numberSuffix';

// UserSwitchOutlined,
interface Columns {
    text: string;
    record: any;
}

const { Title, Text } = Typography;

export const JobColumn: FC<Columns> = memo(
    ({ record }) => (
        <Row data-testid='job'>
            <Col span={24}>
                <Title
                  disabled={get(record, 'stage', '') === 'REJECTED'}
                  level={4}
                  className='no-margin'
                >
                    <Link
                      isExternal
                      to={`job/${get(record, 'id', '')}`}
                      style={{ color: 'inherit' }}
                    >
                        { get(record, 'title', '') }
                    </Link>
                </Title>
            </Col>
            <Col data-testid='functional-area' span={24}>
                <Text
                  disabled={get(record, 'stage', '') !== 'APPROVED'}
                  type='secondary'
                >
                    { get(record, 'functional_area.name', '') }
                </Text>
            </Col>
            {
                get(record, 'stage', '') !== 'APPROVED'
                && (
                    <Text type='danger' data-testid='stage'>
                        { get(record, 'stage', '') }
                    </Text>
                )
            }
            {
                get(record, 'stage', '') !== 'APPROVED' && get(record, 'state', '') !== 'OPEN'
                && (
                    <Text type='danger' style={{ padding: '0px 2px' }}>
                        ,
                    </Text>
                )
            }
            {
                get(record, 'state', '') !== 'OPEN'
                && (
                    <Text type='danger'>
                        { get(record, 'state', '') }
                    </Text>
                )
            }
            <Col span={24} style={{ marginTop: '1em' }}>
                <Row gutter={8}>
                    <Col>
                        <Link
                          isExternal
                          to={`job/${get(record, 'id', '')}/edit/${get(record, 'organization.id', '')}`}
                        >
                            <Tooltip
                              title='Edit'
                              placement='bottom'
                              arrowPointAtCenter
                            >
                                <EditOutlined
                                  className='listing-action-icons'
                                />
                            </Tooltip>
                        </Link>
                    </Col>
                    <Col>
                        <Tooltip
                          title='Add Slots'
                          placement='bottom'
                          arrowPointAtCenter
                        >
                            <Link
                              isExternal
                              to={`job/${get(record, 'id', '')}/slots`}
                            >
                                <CalendarOutlined className='listing-action-icons' />
                            </Link>
                        </Tooltip>
                    </Col>
                    {
                        get(record, 'state', '') === 'OPEN'
                        && get(record, 'stage', '') === 'APPROVED'
                        && (
                            <Col>
                                <Tooltip
                                  title='Add Applications'
                                  placement='bottom'
                                  arrowPointAtCenter
                                >
                                    <FileAddOutlined className='listing-action-icons' />
                                </Tooltip>
                            </Col>
                        )
                    }
                    {
                        get(record, 'state', '') === 'OPEN'
                        && get(record, 'stage', '') === 'APPROVED'
                        && (
                            <Col>
                                <Tooltip
                                  title='Source Candidates'
                                  placement='bottom'
                                  arrowPointAtCenter
                                >
                                    <UserAddOutlined className='listing-action-icons' />
                                </Tooltip>
                            </Col>
                        )
                    }
                    {
                        get(record, 'is_flagged', false)
                        && (
                            <Col>
                                <Tooltip
                                  title='Flagged'
                                  placement='bottom'
                                  arrowPointAtCenter
                                >
                                    <Text type='danger'>
                                        <FlagOutlined
                                          style={{ marginRight: 4, color: 'inherit' }}
                                        />
                                        Flagged
                                    </Text>
                                </Tooltip>
                            </Col>
                        )
                    }
                </Row>
            </Col>
        </Row>
    ),
);

const pricingColors: Record<string, string> = {
    FREE: '#db3361',
    PREPAID: '#186E75',
    POSTPAID: '#db3361',
    TEMP_STAFFING: '#9C1B3E',
    JOB_POSTING: '#db3361',
};

const contractType = (record: any): string => {
    if (get(record, 'contract_type', '') === 'PERMANENT') {
        return 'PERM';
    }
    if (get(record, 'contract_type', '') === 'TEMPORARY') {
        return 'TEMP';
    }
    return get(record, 'contract_type', '');
};

export const CompanyColumn: FC<Columns> = memo(
    ({ record }) => (
        <Row data-testid='company'>
            <Col span={24}>
                <Text data-testid='organization-popular-name' style={{ textTransform: 'capitalize' }}>
                    <Link
                      isExternal
                      to={`org/${get(record, 'organization.id', '')}`}
                    >
                        { get(record, 'organization.popular_name', '') }
                    </Link>
                </Text>
            </Col>
            <Col data-testid='organization-name' span={24}>
                <Text ellipsis>
                    {get(record, 'organization.name', '')}
                </Text>
            </Col>
            <Col span={24} style={{ marginTop: '1em' }}>
                <Text
                  data-testid='pricing'
                  style={
                      {
                        color: pricingColors[get(record, 'pricing_plan_type', 'FREE') || 'FREE'],
                        textTransform: 'capitalize',
                      }
                    }
                >
                    ●
                    {' '}
                    {get(record, 'pricing_plan_type', '')}
                </Text>
                -
                <Text data-testid='contract' style={{ textTransform: 'capitalize' }}>
                    {
                        contractType(record)
                    }
                </Text>
            </Col>
        </Row>
    ),
);

export const Slots: FC<Columns> = memo(({ record }) => {
    if (get(record, 'recent_slot')) {
        return (
            <Button
              type='link'
              className='no-padding'
              data-testid='recent-slot'
              icon={
                <CalendarTwoTone twoToneColor='#fa9f34' />
              }
            >
                <b>Next Slot:</b>
                {' '}
                { get(record, 'recent_slot') }
            </Button>
        );
    }
    return (
        <Button
          type='link'
          className='no-padding'
          data-testid='recent-slot'
          disabled
          icon={
              (
                <img
                  src={NoSlotsAvailableSVG}
                  alt='no slots available'
                  style={{
                      paddingRight: 6,
                      marginLeft: -5,
                  }}
                />
              )
          }
        >
            No slots available
        </Button>
    );
});

export const JobTypeColumn: FC<Columns> = memo(
    ({ record }) => (
        <Row data-testid='job-type-column'>
            <Col data-testid='client-approval' span={24}>
                <Tooltip
                  title={get(record, 'client_approval_required', false) ? 'Client approval required' : 'Client approval not required'}
                  placement='bottom'
                >
                    <Button
                      size='small'
                      disabled
                      className={get(record, 'client_approval_required', false) ? 'car-button' : 'ncar-button'}
                    >
                        {get(record, 'client_approval_required', '') ? 'CAR' : 'NCAR'}
                    </Button>
                </Tooltip>
            </Col>
            {
                get(record, 'is_screening_required', false)
                && (
                    <Col data-testid='screening' span={24}>
                        <Button
                          type='link'
                          className='no-padding color-black'
                          icon={
                            <PhoneTwoTone rotate={100} twoToneColor='#fa9f34' />
                          }
                        >
                            Screening Required
                        </Button>
                    </Col>
                )
            }
            {
                !get(record, 'is_screening_required')
                && !get(record, 'client_approval_required')
                && (
                    <Col data-testid='screening' span={24}>
                        <Button
                          type='link'
                          className='no-padding color-black'
                          icon={
                            (
                                <img
                                  src={WalkInSVG}
                                  alt='walk-in jobs'
                                  style={{
                                      color: 'grey',
                                      paddingRight: 12,
                                    }}
                                />
                            )
                          }
                        >
                            Walk-in Job
                        </Button>
                    </Col>
                )
            }
            {
                get(record, 'is_resume_subscribed')
                && (
                    <Col data-testid='resume' span={24}>
                        <Button
                          type='link'
                          className='no-padding color-black'
                          icon={
                            <FileTextTwoTone twoToneColor='grey' />
                          }
                        >
                            Resume Required
                        </Button>
                    </Col>
                )
            }
            <Col span={24}>
                <Slots record={record} text='' />
            </Col>
        </Row>
    ),
);

export const OpeningsColumn: FC<Columns> = memo(
    ({ record }) => (
        <Row gutter={8}>
            <Col span={24}>
                <VacanciesActions
                  data={record}
                  openSidebar={(): null => null}
                />
            </Col>
            <Col data-testid='education-and-experience' span={24} style={{ marginTop: '1em' }}>
                <Text strong>Edu: </Text>
                { get(record, 'expectation.degree_requirements.degree.name', 'NA') }
                {' | '}
                <Text strong>Exp: </Text>
                {
                    !get(record, 'expectation.work_exp_requirements.min_experience')
                    && 'NA'
                }
                {
                    get(record, 'expectation.work_exp_requirements.min_experience', 'NA') > 11
                    ? `${(get(record, 'expectation.work_exp_requirements.min_experience', 'NA') * 0.0833334).toFixed(2)} yrs - `
                    : get(record, 'expectation.work_exp_requirements.min_experience', null)
                    && `${get(record, 'expectation.work_exp_requirements.min_experience', 'NA')} mo - `
                }
                {
                    get(record, 'expectation.work_exp_requirements.max_experience', 'NA') > 11
                    ? `${(get(record, 'expectation.work_exp_requirements.max_experience', 'NA') * 0.0833334).toFixed(2)} yrs`
                    : get(record, 'expectation.work_exp_requirements.max_experience', null)
                    && `${get(record, 'expectation.work_exp_requirements.max_experience', 'NA')} mo`
                }
            </Col>
            <Col data-testid='salary' span={24}>
                <Text strong>Salary: </Text>
                {
                    numberSuffix(get(record, 'offer.min_offered_salary'))
                }
                -
                {
                    numberSuffix(get(record, 'offer.max_offered_salary'))
                }
                {' '}
                {
                    get(record, 'offer.salary_format')
                }
            </Col>
        </Row>
    ),
);

export const ImportantPeopleColumn: FC<Columns> = memo(
    ({ record }) => (
        <Row>
            <Col span={24}>
                <Row data-testid='important-people-cse' gutter={8}>
                    <Col>
                        <Text strong>CSE  </Text>
                    </Col>
                    <Col>
                        <Text ellipsis>
                            {
                                `${get(record, 'associated_cse.user.first_name', '')} ${get(record, 'associated_cse.user.last_name', '')}`
                            }
                        </Text>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row data-testid='important-people-kam' gutter={8}>
                    <Col>
                        <Text strong>KAM  </Text>
                    </Col>
                    <Col>
                        <Text ellipsis>
                            {
                                `${get(record, 'key_account_manager.user.first_name', '')} ${get(record, 'associated_cse.user.last_name', '')}`
                            }
                        </Text>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row data-testid='important-people-gfi' gutter={8}>
                    <Col>
                        <Text strong>GFI  </Text>
                    </Col>
                    <Col>
                        <Text ellipsis>
                            {
                                `${get(record, 'recruitment_support.user.first_name', '')} ${get(record, 'associated_cse.user.last_name', '')}`
                            }
                        </Text>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Text>
                    { get(record, 'partner_visibility.visibility', 0) === 1 ? 'Visible to ALL partners' : 'NOT visible to partners' }
                </Text>
            </Col>
        </Row>
    ),
);
