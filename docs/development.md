Steps to pull on CTS beta:

   Install Gcloud SDK as shown [here](https://cloud.google.com/sdk/docs/quickstart-macos)

1.  Go to your terminal

2.  Run: gcloud compute ssh ubuntu@cts-staging --project=aj-cloud-staging --zone=asia-south1-a   ssh ubuntu@35.200.246.245b 

3.  Once logged into beta server, do the following steps:

1.  cd staging<number>/cts/

2.  If pulling the the branch for the first time:

1.  Git fetch origin <your-branch-name>

2.  Git checkout <your-branch-name>

4.  Git pull <your-branch-name>

5.  If changes in react app :

1.  cd react/

2.  npm run generate staging<number>

3.  npm run build

4.  cd back to cts "cd .."

7.  Run "sudo grunt"

8.  Run "npm run replace-react-path"

9.  Run "sudo forever list"

10. Run "sudo forever restart [process index]"