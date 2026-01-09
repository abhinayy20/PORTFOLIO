# Lab Exam Submission Details

## Part A: Ansible
The playbook `manage_users.yml` is configured to manage the `app_admin` user and `devops_team` group.

### How to Run:
To run the playbook against a set of hosts defined in `inventory.ini`:
```bash
ansible-playbook -i inventory.ini manage_users.yml
```

### Verification:
After running, you can verify the user and group:
- **Check User**: `id app_admin`
- **Check Group**: `getent group devops_team`
- **Check Home Directory**: `ls -d /home/app_admin`
- **Check Shell**: `grep app_admin /etc/passwd`

## Part B: Jenkins
The `Jenkinsfile` is a Declarative Pipeline that includes a manual approval gate.

### Logic:
- **Build Stage**: Runs for every branch.
- **Manual Approval Gate**: Uses the `when { branch 'main' }` condition. It will ONLY trigger if the build is on the `main` branch.
- **Input Step**: Pauses the pipeline and waits for a user to click "Proceed".

### How to Test:
1. Create a "Pipeline" job in Jenkins.
2. Configure "Pipeline from SCM" and point it to your repository.
3. Run the job on the `main` branch to see the gate.
4. Run the job on any other branch (e.g., `dev`) to see the gate being skipped.
