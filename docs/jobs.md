### Introduction
Job refers to all the Job Posting on our Platform. Jobs Tab provides is build as an admin panel, to view, update and create applications for jobs.

1. List of jobs
1. Filters and sorters for jobs
1. Link to [create a application](#create-application).
1. Link to see recommended candidates for a Job
1. View History of a job posting 

### Sources for Jobs
1. When a client adds a new job posting through the website. 
1. When a sales executive adds a new job posting through the website (Primary agency dash board). 
1. When a client adds a new job posting through the mobile app.


### Status Flow

| No | Name | Short Code | Data | Actions | Description |  
| --- | ---- | ---------- | ---- | ------- | ----------- |  
| 1. | Unapproved | J_UN | None | NA | By default whenver a new job is created, it is in the Unapproved status. This means, that our sales team is in talks with the client, and has yet to approve the job. |  
| 2. | Open | O  | NA | NA | The job posting is now open, and scheduling should be done for it. |  
| 3. | Pause | P | NA | NA | This status is to mark jobs that are on hold as the client is not responding, hence no further scheduling is done till further notice. |  
| 4. | Closed | C | Reason | Reason saved on recruit | the job posting is closed, and no further scheduling should be done for the applications of this job. |  
| 5. | Rejected | J_RJ | Reason | Reason saved on recruit | The job posting was not approved by the sales team. |  

### Search 
| No | Field |  
| --- | ----- |  
| 1. | Job ID |  
| 2. | Company ID |  
| 3. | Manager Phone Number |    
| 4. | Job Name |  
| 5. | Company Name |  

### Files
#### Grid jade
Base folder : 
[server/views/partials/api/job/](https://github.com/aasaanjobs/cts/tree/develop/server/views/partials/api/job)

Filters : 
[server/views/partials/api/job/filters.jade](https://github.com/aasaanjobs/cts/tree/develop/server/views/partials/api/job/filters.jade)

List : 
[server/views/partials/api/list.jade](https://github.com/aasaanjobs/cts/blob/1c2d2c33b2ade8d00d29b6c0028d1b26602c6257/server/views/partials/api/list.jade)

Details page :
[server/views/partials/api/job/detail/detail_info.jade](https://github.com/aasaanjobs/cts/blob/2488d3b32fcf7c02b85faeaaf9d6bd4188bd9f61/server/views/partials/api/job/detail/detail_info.jade)

Grid Sidepanel : 
[server/views/partials/api/job/sidepanel.jade](https://github.com/aasaanjobs/cts/blob/1d638a5a27f46b8727890add651a670df5b485e9/server/views/partials/api/job/sidepanel.jade)

Details page sidepanel : 
[server/views/partials/api/job/updates.jade](https://github.com/aasaanjobs/cts/blob/a28c00c3ca32708fef18e4c0e18540d574f7a8c8/server/views/partials/api/job/updates.jade)