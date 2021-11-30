After you clone the repository, to get the development servers running, do the following:

1.  cd into the client folder 2) run npm install 3) run npm start

1.  cd into the server folder 2) run npm install 3) run npm start

If the MongoDB connection is failing, please switch to a Wifi with a non-strict firewall.

when making first push to new remote branch, do
git config --global push.default current
then git push


For developers, before you push into main, please follow these steps: 
  1) Save all changes on your branch
  2) git add . 
  3) git commit -m "some message" 
  4) git checkout main 
  5) git pull 
  6) git merge <your work's branch name> 
  7) resolve merge conflicts and check everything works 
  8) while still on main, git add . 
  9) git commit -m "message" 
  10) git push 

Please make sure everything works before pushing to main! we don't have anyone vetting merges so it's honor code!
