/* eslint-disable react/jsx-props-no-spreading */
import { Col } from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
// this is required for css prop to work
import styled from 'styled-components/macro';
import AddApplication from './AddApplication.component';
import Row from './ApplicationActions.style';
import MakeCampaign from './MakeCampaign.component';
import Recommendations from './Recommendation.component';
import SampleResume from './SampleResume.component';
import ShareJd from './ShareJd.component';
import SourceCandidates from './SourceCandidate.component';
import ViewAllInterviews from './ViewAllInterviews.component';
import SidebarInterface from 'pages/Jobs/listing/listing-sidebar/interfaces';

const ApplicationActions: FC<SidebarInterface> = (props) => (
    <Row>
        {
            get(props, 'data.stage', '') !== 'UNAPPROVED'
            && (
                <>
                    <AddApplication {...props} />
                    <SourceCandidates {...props} />
                    <Recommendations {...props} />
                    <Col>
                        <ShareJd {...props} />
                    </Col>
                    <MakeCampaign {...props} />
                </>
            )
        }
        <SampleResume {...props} />
        <ViewAllInterviews {...props} />
    </Row>
);

export default memo(ApplicationActions);
