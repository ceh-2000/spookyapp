# Spookyapp

This is the Google Developer Student Club at W&M's demonstration project for the month of October.

## Prerequisites
1. `npm` (follow this guide for your operating system: https://kinsta.com/blog/how-to-install-node-js/)
2. `Angular` (consider creating a test app after installation: https://angular.io/guide/setup-local)
3. `git` (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. `python 3.6+` (use `pyenv` package manager: https://realpython.com/intro-to-pyenv/)
5. `pip3` (this is a Python package manager: https://monsterhost.com/what-is-pip-and-how-to-install-pip3/)   
5. `VS Code` (optional: https://code.visualstudio.com/)

## Getting started (Mac/Linux)
1. Open a new session of Terminal.
2. Make sure `npm` is installed correctly using `npm -V` and check for `Angular` with `ng -V`.
3. Clone this repository so you can use it locally: `git clone [REPO_LINK]`
4. `cd spookyapp`
5. Type `rm -rf .git` to remove Github dependencies. You can attach this project to your own Github repository at this point using [this](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github) guide. 
6. Run `npm install` to get the package dependencies.

## Running the app

Run `ng serve` for a dev server from the project root. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Creating new Angular components, services, etc.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Deploying to Firebase Hosting

1. Navigate to [https://firebase.google.com/](https://firebase.google.com/). 
2. Click "Go to console" in the upper right corner and create a new project.
3. From the project dashboard click on "All products" in the left panel and select "Hosting" → "Get started".
4. Minimize the webpage and open Terminal. From command line run `npm install -g @angular/cli`.
5. Run `npm install -g firebase-tools`.
6. Run `firebase login` and enter your credentials for Firebase.
7. Run `firebase init hosting` and answer the prompts as follows:
- What do you want to use as your public directory? `dist/spookyapp`
- Configure as a single-page app (rewrite all urls to /index.html)? `y`
- Set up automatic builds and deploys with GitHub? `N`
- (Optional) File `dist/spookyapp/index.html` already exists. Overwrite? `y`
8. Run `ng build` to create a production build in the `dist/spookyapp/` directory.
9. Deploy to firebase hosting with `firebase deploy --only hosting`.
10. Navigate to the outputted URL and check that the deployment worked.

## Local Google Cloud Functions

These instructions come from: https://cloud.google.com/functions/docs/writing.

1. Open a command line session.
2. Check that `python` installed correctly: `python -V`. Check that `pip3` installed correctly: `pip3 -V`.
3. We need to set up our directory structure. 
   - From the project root, enter `mkdir functions` in the command line. 
   - `cd functions`
   - `mkdir my-spooky-function`
   - `cd my-spooky-function`
   - `touch main.py`
   - `touch requirements.txt`
   - Type `ls` to check that your files are there and `pwd` to make sure your path is correct.
4. Open `requirements.txt` in the Text Editor of your choice (this could be VS Code) and add the following:
  `functions-framework==3.*`
5. Open `main.py` and add the following:
```
import functions_framework

# Register an HTTP function with the Functions Framework
@functions_framework.http
def my_http_function(request):
  # Your code here
      
  # Return an HTTP response
  return 'Your local function works!'
```
6. Deploy your function locally using the following: `functions-framework --target=my_http_function --port 8000`
7. Check that your function worked by going to the following link in your browser: [http://localhost:8000/](http://localhost:8000/)
8. Type Control+C in Terminal to kill the process running your local function.

## HTTP endpoints with an Angular service
1. From the project root in a command line session, type `ng generate service call-api-endpoint`
2. Go into `package.json` and ensure `rxjs` uses a version matching the pattern `7.x.x`. This is necessary to use the function `firstValueFrom()`.
3. 

