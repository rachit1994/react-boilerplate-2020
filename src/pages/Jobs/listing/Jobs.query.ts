import { gql } from 'apollo-boost';
/*
  * Todo
  * is_flagged
  *
*/
const jobShape = `
    id
    title
    organization {
      popular_name
      name
      id
    }
    functional_area {
      id
      name
    }
    state
    stage
    pricing_plan_type
    contract_type
    client_approval_required
    is_screening_required
    is_resume_subscribed
    vacancies
    locations {
      place {
        city
        locality
      }
    }
    expectation {
      degree_requirements {
        degree {
          name
        }
      }
      work_exp_requirements {
        min_experience
        max_experience
      }
    }
    offer {
      salary_format
      min_offered_salary
      max_offered_salary
    }
    associated_cse {
      user {
        first_name
        last_name
      }
    }
    key_account_manager {
      user {
        first_name
        last_name
      }
    }
    recruitment_support {
      user {
        first_name
        last_name
      }
    }
    point_of_contacts {
      user {
        first_name
        last_name
      }
    }
    associated_dses {
      user {
        first_name
        last_name
      }
    }
    associated_schedulers {
      user {
        first_name
        last_name
      }
    }
    associated_partner_pocs {
      user {
        first_name
        last_name
      }
    }
    partner_visibility {
      visibility
    }
    applications {
      count
    }
    application_metrics {
      joinings
    }
    is_flagged
    flagged_reason
    cts_aggregations {
      total_applications
      unscreened_applications
      interviews_linedup
      interviews_pending
      need_to_schedule
    }
`;

const jobsQuery = gql`
    query getJobList(
        $filters: FilterInput
        $first: Int
        $after: Int
        $sort: String
        $query: String
    ) {
        nodes(
            type: Job
            filter: $filters
            first: $first
            after: $after
            sort: $sort
            query: $query
        ) {
            totalCount
            edges {
              ... on Job {
                ${jobShape}
              }
            }
            pageInfo {
              hasNextPage
              totalPages
              pageNumber
            }
          }
    }
`;

export default jobsQuery;
