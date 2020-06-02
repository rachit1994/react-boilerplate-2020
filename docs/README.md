# CTS Product Documentation
[TOC]

## Introduction

Candidate tracking system (CTS) is a product for internally managing operations of the organization . The aim is to create a product that helps Aasaanjobs manage operations more efficiently. The primary and currently the only user is **Primary Agency.**
Stakeholders in using CTS as a system are following.
1. Operations
2. Business Development
3. Sales
4. Marketing - Still to be onboarded.

All the operations of the primary agency in time, should only be managed by CTS. The feature set of CTS, that is currently live, is explained below.

##Calls and Communcation
For every action with any record on the CTS, we currently track the mode of communication and an optional comment alongside. These details are saved in the history dataset. We record the following information when saving details for a communication. Also all actions on CTS, are linked to a communication. 

### Fields for Communication
1. Mode of Communication - 
	1. Outbound Call - It will also require you to add the details, about whether, the call was answered, not picked up, busy etc.
	2. Inbound Call
	3. SMS
	4. Email
	5. Travelling Assessor
	6. Walkin
1. Comment - optional - Optionally any user can give additional comments which is a free text field, related to the communication. 
 
 The above details are saved in the [History](#History) dataset, along with any other specific details based on the actions we were taking. 

#### Notifications for call not answered
When a call is marked "Unavailable", "Did Not Answer", "Busy" or "Switch Off", A sms is sent to the candidate notifying the same.
This functionality is currently live on Escrow, Candidates and Applications tab.
 
## Escrow
### Introduction
The escrow functionality is based around unverified data, so that the entries in the employee dataset are cleaner, and we can weed out the bad data before it reaches the employee dataset. 

#### Sources for Escrow
1. When a candidate refers another candidates - (Referral Flow)
2. When an agency uses the send invite functionality. 
3. When an agency uses bulk upload to upload a dataset of contact information.

### Status Flow

| No | Name | Short Code | Data | Actions | Description |  
| --- | ---- | ---------- | ---- | ------- | ----------- |  
| 1. |  Not Contacted  |  NC  |  None  |  NA  | Not contacted refers to a person who Aasaanjobs has not been in touch with. Every entry by default in escrow would have this status. Operationally everyone who has not been contacted needs to be given a call, we either move to Registered or Bad Data, state. |  
| 2. |  Registered  |  R\_R |  location FA Email | Employee created.User Created. Details copied to Employee. | When the information of an escrow record has been confirmed, we move him to Registered status. We need the following information to move an escrow record to Registered.|  
| 3. |  Bad Data  |  DNC  |  None  |  NA  |  Escrow is moved to bad data when the data we have is incorrect. It can either be due to **incorrect phone number**, or user data being completely incorrect and the person unwilling to give correct information and register.|  
| 4. |  Scheduled for Profiling  |  R\_SFP  |  Name, Location, FA, Email, Office, Date, Time  |  Employee, Interview, User created. Details copied to employee object.| R\_SFP is used to mark candidates for temp staffing drives and input the verification dates.|

### Fields Required 
1. Gender - Used for Salutation
1. First name
1. Last Name
1. Escrow Id
1. Status
1. Phone number
1. Email
1. Referral User Object
1. Agency Object
1. Created on
1. Functional Area

### Filters   
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Date Range |  
| 2. | Status | Multiselect |  
| 3. | Referral Id | From-To |  
| 4. | Last Modified | Date Range |  
| 5. | Agency | Multi select |  
| 6. | Functional Area | Multi Select |

### Sorting  
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Latest / Oldest |

### Search  
| No | Field |  
| --- | ----- |  
| 1. | Referral ID |  
| 2. | Phone Number |


## Candidates
### Introduction
Candidate refers to all the Job Seekers on our Platform. Candidates Tab provides is build as an admin panel, to view, update and schedule Candidates for Assessment.

1. List of candidates
1. Filters and sorters for Candidates
1. Link to assess a candidate.
1. Link to see recommended Jobs for a candidate
1. View History of a candidate 

#### Sources for Candidates
1. When a referral is registered in the escrow tab
1. When a new Candidate registers through the website. 
1. When a new candidate registers through the mobile app.
1. When an agency adds a candidate through Add Candidate.
1. Wap website.
1. Walking Profiling.

### Status Flow

| No | Name | Short Code | Data | Actions | Description |  
| --- | ---- | ---------- | ---- | ------- | ----------- |  
| 1. | Registered | R | None | NA | By default whenver a new candidate is created, he is in the Registered status. This means, that we have a part of the information about this candidate, including his phone number and name. |  
| 2. | Candidate not interested. | CNI  | Reason, Other | Reason updated on Recruit. | NA |  
| 3. | Callback | CB | None | NA | This status is to mark candidates who have requested a callback, as they are currently busy or might be interested in future. |  
| 4. | To be scheduled for assessment | TBSV | NA | NA | TBSV is for people who are pending to be scheduled for assessment. It might be due to unavailability of slots around their area, or them being unavailable during the week. |  
| 5. | Scheduled for Assessment | SFV | Interview office, Date, Time | Interview creation. | Scheduled for Assessment is to mark people who have confirmed a date and time for assessment. It is to keep track of people coming to our centers. |  
| 6. | Scheduled for Profiling | SFP | Interview office, Date, Time | Interview creation. | Schedulev for Profiling is to mark people who have confirmed a date and time for temp drive. It is created when you mark a candidate as SFP in escrow. This is just to distinguish people for drives from regular registered candidates. |  
| 7. | Candidate Profiled | C_P | None | NA | This is interim status, marked when a candidate fills his mandatory details on the self registration process. Should also be reflected if someone completed their profile from the Mobile App. |

### Fields Required 
1. Gender - Used for Salutation
1. First name
1. Last Name
1. Candidate Id
1. Escrow Id
1. Status
1. Phone number
1. Email
1. Interview Object
    1. Slot
    1. Office
    1. Start time
    1. End time
    1. Date
    1. Interview Office Address
1. Referral User Object
    1. Referral User name
    1. Referral User Id
1. Agency Object
    1. Agency Id
    1. Agency Name
1. Source Object
    1. Source Type
    1. Source Id
    1. Source Name
1. Created on
1. Functional Area
1. Last Modified Date
1. Verification Date
1. Mobile Number Verified
1. Email Verified

### Filters 
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Date Range |  
| 2. | Status | Multiselect |  
| 3. | Candidate Id | From-To |  
| 4. | Escrow Id | Equal |  
| 5. | Last Modified | Date Range |  
| 6. | Agency | Multi select |  
| 7. | Functional Area | Multi Select |  
| 8. | Verification Date | Date Range |  
| 9. | Assessment Interview Date | Date Range |  

### Sorting 
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Latest / Oldest |  
| 2. | Last Modified On | Latest / Oldest |  
| 3. | Verification Date | Latest / Oldest |  
| 4. | Assessment Interview Date. | Latest / Oldest |  

### Search 
| No | Field |  
| --- | ----- |  
| 1. | Candidate ID |  
| 2. | Phone Number |  
| 3. | Candidate Name |  


## Application
### Introduction
Application refers to a unique mapping of a Candidate and a Job Posting on our platform. Application Tab is build as an admin panel, to view, track, update, schedule candidates for client interviews, take feedback from client, raise conflicts and mark closures.

1. List of application
1. Filters and sorters for application
1. Link to see recommended Jobs for a application
1. View History of a application 
1. Mark Conflict

#### Default view
When the tab is opened, it shows applications with Job status in either Open, Pause, or Close and Candidate status in Verified or Candidate Profiled.

#### Create Application
This fucntionality allows the users to create applications, for the following cases:

1. When the job posting is not available in the recommendations of a candidate and the operator feels this is a good match, and candidate is willing to work at the given job, an application can be created.
2. When the candidate walks in for a recruitment drive, and on spot applications are created.

The application can only be created for jobs which have status either Open or Paused.
The application created can have status either PAR [Primary Agecy Recommended] or A[Applied], depending on whether the candidate's consent is recieved.
Also a history is saved to trace the origin of application.

#### Sources for Application
1. When a primary agency recommends job to a candidate. PAR
1. When a primary agency creates application for job through CTS. PAR / A
1. When a candidate applies through the website or app. CAP
1. When an agency recommends a job for candidate through website.  AR
1. When an employer shortlists a candidate for job through website or app.  ES
1. When a candidate recommends a job for another candidate through website. RFJ

#### Conflicts
Conflict usually occurs when a candidate and client give contradictory feedbacks. e.g:  

1. Candidate says he didn't go for interview, while client says that the candidate is selected, or vice versa when clients try to poach a candidate.
2. When a candidate reaches for interview without informing us. 
3. When client says he rejected some candidate, and that candidate says he was selected.  

And other such cases, so to capture the data for further analytics this feature is put in place.
To keep a track of such conflicts this feature allowes user to raise a conflict as well as resolve an existing one. User can provide the detailed data for the conflict and raise/resolve it. A filter is provided to filter applications based on whether there are existing conflicts or resolved.

### Status Flow
  
| No. | Name | Short Code | Data | Actions | Description |  
| --- | ---- | ---------- | ---- | ------- | ----------- |  
| 1. | Primary Agency Recommended | PAR | NA | None | When a primary agency recommends job to a candidate, application is started with this status |  
| 2. | Candidate Applied | CAP | NA | None | When a candidate applies through the website or app, application is started with this status |  
| 3. | Agency Recommended | AR | NA | None | When an agency recommends a job for candidate through website, application is started with this status |  
| 4. | Employer Shortlisted | ES | NA | None | When an employer shortlists a candidate for job through website or app, application is started with this status |  
| 5. | Referred Job | RFJ | NA | None | When a candidate recommends a job for another candidate through website, application is started with this status |  
| 6. | Applied | A | Candidate's and primary Agency's Consent | NA | Application in this status are further acted upon for scheduling interviews.|  
| 7. | Not Interested | NI | Reason, Other | Reason updated on Recruit. | For when Candidate is not interested in the job. |  
| 8. | Application Rejected | ARJ | Reason, Other  | Reason updated on Recruit. | For when primary agency doesn't validate the application. |  
| 9. | On Hold For Interview | OH | Reason, Other  | Reason updated on Recruit. | For when primary agency puts the application on hold for various reasons. |  
| 10. | To be scheduled | TBSI | NA | NA | TBSI is for applications who are pending to be scheduled for interviews. It might be due to unavailability of slots, or them being unavailable. |  
| 11. | Profile Sent to Client | PSTC | NA | Candidate's Resume is sent to the employer_manager for shortlisting| NA |  
| 12. | Scheduled for Interview | SFI | Date Time Candidate's approximate arrival time range. | Interview Creation | Scheduled for Interview is to mark candidates who have confirmed a date and time for interview. It is to keep track of candidates going for client interviews. |  
| 13. | Did Not Turn Up | DNTU | Reason Other  | Reason updated on Recruit. | This status marks applicants who did not turn for a booked interview. |  
| 14. | Did Not Respond | DNR | NA | NA | This status marks applicants who did not responded our calls. |  
| 15. | Going For Interview | GFI | NA | NA | This status marks applicants who confirmed on call that they are going for interview. |  
| 16. | Awaiting Feedback | AWF | NA | NA | This status marks applicants who confirmed on call that they appeared for interview. |  
| 17. | Rejected | RJ | Reason, Other  | Reason updated on Recruit. | This status marks applicantions rejected by employer after interview. |  
| 18. | Selected | SEL | Date Of joining   Salary offered | Selection object created. | This status marks applicantions selected by employer after interview. |  
| 19. | On Hold For Selection | OHFS | NA | NA | This status marks applicantions put on hold by employer after interview. |  
| 20. | Second Round Shortlisted | SRS | NA | NA | This status marks applicantions, selected for further interview by employer, after first interview. |  
| 21. | Did Not Respond After Selection | DNRAS | NA | NA | This status marks applicantions who did not responded after selection, may be they colluded with the employer. |  
| 22. | Did Not Agree To Join | DNATJ | Reason, Other  | Reason updated on Recruit. | This status marks applicantions who did not accept the offer after selection, may be due to location, salary, working hours, etc.. |  
| 23. | Agree To Join | ATJ | Date Of joining   Salary offered | Selection object updated/created. | This status marks applicantions who accepted the offer after selection. |  
| 24. | Did Not Join | DNJ | Reason, Other  | Reason updated on Recruit. | This status marks applicantions who did not join the job after selection. |  
| 25. | Joined | J | Date Of joining   Salary offered | Selection object updated/created. | This status marks applicantions who joined the job after selection. |  
| 26. | Left Job | LJ | Reason, Other  Left On Date| Reason updated on Recruit. Selection Object updated | This status marks applicantions who Left the job after joining. |  
| 27. | Closure Achieved | CA | replacement candidate - true/false and, the application ID in case it is true | Updated on recruit | This status marks applicantions for whom successful closure is achieved. |

### Fields Required 
1. Applicant
    1. id 
    1. status_type  
    1. created on  
    1. updated On  
    1. deleted 

1. Employee 
    1. id
    1. gender
    1. first_name
    1. last_name
    1. user.mobile
    1. user.email 
    1. contact.formatted_address
    1. job_expectation.min_salary
    1. job_expectation.max_salary
    1. status
    1. is_verified
    1. functional_areas
    1. escrow
    1. Agency
        1. id
        1. orgname
        1. primary_contact_number
        1. primary_email
        1. Agency Type
    1. Current Salary
    1. Job Expectation
        1. Shift Type
        1. Functional Area 


1. Interview 
    1. id  
    1. active
    1. attendence  
    1. candidate_start_time  
    1. candidate_end_time  
    1. slot
        1. start
        1. end
        1. duration
        1. expected_date
        1. location
        1. id
        1. visibility
        1. _office
        1. manager


1. Job Posting
    1. id
    1. job_title  
    1. posting_status  
    1. send_resume
    1. created_on  
    1. updated_on
    1. job_offer
        1. min_salary
        1. max_salary
        1. slot_preference
        1. location
    1. job_requirement
        1. short_name
        1. id
    1. org
        1. id  
        1. orgname  
    1. employer_managers
        1. first_name
        1. last_name
        1. mobile
        1. email

1. Selection 
    1. salary  
    1. date_of_joining

###  Filters   
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Date Range |  
| 2. | Updated On | Date Range |  
| 3. | Interview On | Date Range |  
| 4. | Date of Joining On | Date Range |  
| 5. | Status | Multiselect |  
| 6. | Candidate Status | Multiselect |  
| 7. | Job posting Status | Multiselect |  
| 8. | Job Id | Equal |  
| 9. | Application Id | Equal |  
| 10. | Company | Multi select |  
| 11. | Functional Area | Multi Select |  
| 12. | Conflict | select |

### Sorting   
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Latest / Oldest |  
| 2. | Updated On | Latest / Oldest |  
| 3. | Job Creation Date | Latest / Oldest |  
| 4. | Interview Date. | Latest / Oldest |

### Search   
| No | Field |  
| --- | ----- |  
| 1. | Candidate ID |  
| 2. | Phone Number |  
| 3. | Candidate Name |  
| 4. | Company Name |  
| 5. | Job Title |  
| 6. | Job ID |  
| 7. | Company ID |


## Jobs
### Introduction
Job refers to all the Job Posting on our Platform. Jobs Tab provides is build as an admin panel, to view, update and create applications for jobs.

1. List of jobs
1. Filters and sorters for jobs
1. Link to [create a application](#create-application).
1. Link to see recommended candidates for a Job
1. View History of a job posting 

#### Sources for Jobs
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

### Fields Required 
1. Job Id
1. Job Title
1. Status
1. Send Resume
1. Office location
1. Company ID
1. Company Name
1. Created On 
1. Updated On
1. Approved On
1. No of Openings
1. Manager Details (POC)
    1. Name
    1. Email
    1. Mobile
1. Job Offer
    1. Salary offered
    1. Office address
    1. Job timings
1. Job Requirement
    1. Functional Area
    1. Proficiency Level

### Filters
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Date Range |  
| 2. | Updated On | Date Range |  
| 3. | Approved On | Date Range |  
| 4. | Company Id | Mulit Select |  
| 5. | Status | Multi Select |  
| 6. | Resume Required | Select |  
| 7. | Functional Area | Multi Select |  
| 8. | Job Type | Select |  
| 9. | Salary Range | Range |  


### Sorting 
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Latest / Oldest |  
| 2. | Updated On | Latest / Oldest |  

### Search 
| No | Field |  
| --- | ----- |  
| 1. | Job ID |  
| 2. | Company ID |  
| 3. | Manager Phone Number |    
| 4. | Job Name |  
| 5. | Company Name |  


## Clients
### Introduction
Clients refers to all the employer on our Platform. Clients Tab provides is build as an admin panel, to view jobs for a client, approve client to post a job. we have following types of clients on our platform namely : Startups, Small & Medium Enterprises, Multinational Companies, Private Limited Company ,Public Limited Company, Government Organization, and Individual Employer.

1. List of Clients
1. Filters and sorters of clients
1. Link to view all job of the client.
1. View History of a client.

#### Sources for clients
1. When a user registers as an employer through the website.
1. When a user registers as an employer through the employer app.
1. When primary agency adds a new client through the website (Primary agency dash board). 

### Status Flow

| No | Name | Short Code | Data | Actions | Description |  
| --- | ---- | ---------- | ---- | ------- | ----------- |  
| 1. | Unapproved | O_UA | None | NA | By default whenver a new client is created, it is in the Unapproved status. This means, that our sales team is in talks with the client, and has yet to approve the client. |  
| 2. | Approved | O_A  | NA | NA | The client is now approved, and can now post jobs on our portal. |  


### Fields Required 
1. Company ID
1. Company Name
1. Status
1. Organization Type
1. Organization Sector
1. Created On 
1. Updated On
1. Office location
1. Manager Details (POC)
    1. Name
    1. Email
    1. Mobile


### Filters 
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Date Range |  
| 2. | Updated On | Date Range |  
| 5. | Status | Multi Select |  
| 8. | Organization Type | Multi Select |  


### Sorting 
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Latest / Oldest |  
| 2. | Updated On | Latest / Oldest |  

### Search 
| No | Field |  
| --- | ----- |  
| 1. | Company ID |  
| 2. | Company Name |  
| 3. | Manager Phone Number |


## Partners
### Introduction
Partners refers to all the agencies on our Platform. Partners Tab is build as an admin panel, to view partners. We have following types of partners on our platform namely : Training Institute, Agency, College, NGO , Cyber Cafe.

1. List of Partners
1. Filters and sorters of partners
1. Link to view all candidates of the partner.

#### Sources for Partners
1. When a user registers as an manpower through the website.
1. When a user registers as an manpower through the partner app.
1. When primary agency adds a new partner through the website (Primary agency dash board). 

###  Status Flow
Currently we dont have status for partners.

### Fields Required 
1. Partner ID
1. Partner Name
1. Agency Institute Type
1. Created On 
1. Updated On
1. Office location
1. Manager Details
    1. Name
    1. Email
    1. Mobile


###  Filters 
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Date Range |  
| 2. | Updated On | Date Range |  
| 4. | Agency Type | Multi Select |  
| 5. | Agency Name | Multi Select |  


### Sorting 
| No | Field | Type |  
| --- | ----- | ---- |  
| 1. | Created On | Latest / Oldest |  
| 2. | Updated On | Latest / Oldest |  

### Search 
| No | Field |  
| --- | ----- |  
| 1. | Agency ID |  
| 2. | Agency Name |  
| 3. | Manager Phone Number |
