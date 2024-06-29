---- On windows
ssh -T git@github.com
eval $(ssh-agent)
ssh-add ~/.ssh/github-Amir-reazon

---- How to push code to the main branch
cd /path/to/your/repository  # Navigate to your repository
git checkout main            # Ensure you are on the main branch
# Edit your files using a text editor
git status                   # Check the status of your repository
git add .                    # Stage all changes
git commit -m "Add feature X or fix issue Y"  # Commit with a message
git push origin main         # Push changes to the remote repository

---- Set Git Configuration Globally (applies to all repositories):
git config --global user.name "amir"
git config --global user.email "amir.amirul@outlook.com"

---- Set Git Configuration for a Specific Repository:
cd /path/to/your/repo
git config user.name "amir_amirul23"
git config user.email "amir_amirul@reazonmy.com"

---- Verify the Configuration:
git config --global --list  # to check global settings
git config --list  # to check settings for the current repository