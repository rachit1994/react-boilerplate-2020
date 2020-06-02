import React, { ReactNode } from 'react';
import {
 JobColumn, CompanyColumn, JobTypeColumn, OpeningsColumn, ImportantPeopleColumn,
} from './Columns.component';

const columns = [
    {
        title: 'Job',
        key: 'Job',
        render:
            (text: string, record: any): ReactNode => {
                if (Object.keys(record).length > 1) {
                    return (
                        <JobColumn text={text} record={record} />
                    );
                }
                return null;
            },
        width: '26%',
    },
    {
        title: 'Company',
        key: 'Company',
        render:
            (text: string, record: any): ReactNode => Object.keys(record).length > 1
            && <CompanyColumn text={text} record={record} />,
        width: '16%',
    },
    {
        title: 'Job type',
        key: 'Job type',
        width: '16%',
        render:
        (text: string, record: any): ReactNode => Object.keys(record).length > 1
        && <JobTypeColumn text={text} record={record} />,
    },
    {
        title: 'Openings',
        key: 'Openings',
        width: '26%',
        render:
        (text: string, record: any): ReactNode => Object.keys(record).length > 1
        && <OpeningsColumn text={text} record={record} />,
    },
    {
        title: 'Important people',
        key: 'Important people',
        width: '16%',
        render:
            (
                text: string, record: any,
            ): ReactNode => Object.keys(record).length > 1
            && <ImportantPeopleColumn text={text} record={record} />,
    },
];

export default columns;
