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