# Devops Lab Project: User Management & Jenkins Pipeline

This project contains two main parts for the laboratory exam:
1. **Ansible Playbook** for user and group management.
2. **Jenkinsfile** for branch-specific manual approval.

## Part A: Ansible
- **File**: `manage_users.yml`
- **User**: `app_admin`
- **Group**: `devops_team`
- **Shell**: `/bin/bash`
- **Requirements**: Home directory creation.

### Commands used for Part A:
1. **Syntax Check**:
   ```bash
   ansible-playbook -i inventory.ini manage_users.yml --syntax-check
   ```
2. **Execute Playbook**:
   ```bash
   ansible-playbook -i inventory.ini manage_users.yml
   ```
3. **Verification Commands**:
   - `id app_admin` (Verify user exists and show groups)
   - `getent group devops_team` (Verify group existence)
   - `ls -ld /home/app_admin` (Verify home directory)

## Part B: Jenkins
- **File**: `Jenkinsfile`
- **Feature**: Manual Approval Gate using `input`.
- **Logic**: Only triggers on `main` branch.

### How to Run Jenkins on Localhost:
If you have `jenkins.war` downloaded:
1. **Command to Start Jenkins**:
   ```bash
   java -jar jenkins.war --httpPort=8080
   ```
2. **Access URL**: `http://localhost:8080`
3. **Setup**: Follow the instructions on the screen to unlock Jenkins and install suggested plugins.

### Pipeline Setup:
1. Create a **New Item** -> **Pipeline**.
2. Under **Pipeline definition**, select **Pipeline script from SCM**.
3. SCM: **Git**.
4. Repository URL: (Your project path or git URL).
5. Script Path: `Jenkinsfile`.

---

## Workspace Summary
The files in this project are:
- `manage_users.yml`: The Ansible playbook.
- `inventory.ini`: Local inventory for testing.
- `Jenkinsfile`: The CI/CD pipeline definition.
- `submission_guide.md`: Detailed instructions for the examiner.
