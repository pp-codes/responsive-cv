# Responsive CV

- Responsive resume using css media queries and ReactJS.
- This site only contains layout of a CV, CV-content is pulled from secret Github Gist.
- To use pdf version of CV, just print the webpage with `Save as pdf`. 
- And the good part, all the infra used in this project as FREE of cost.

## Notes:
- Configuration Provider : `Github Gist`
- Deployment Pipeline: `Github Actions`
- Deployment Infra: `Github Pages` 

## Steps:
1. [Optional] Build/run webapp locally:
    ```sh
    yarn
    yarn start
    ```
2. Deploying online publicly:
    1. Fork this repository.
    2. The content of the resume is pulled from a configuration file, in this case a secret Gist. So to Update cv content:
        1. Create a Github Gist(Secret gist will do) similar to this demo gist: `https://gist.github.com/pritamprasd/95fde56b249662cefda97d303fbfb605`, and update content in the yaml file.
        2. Update the `REACT_APP_GIST_ID` in `.env` file with the created Gist ID. Failing to update this you'll see cv with demo content.
    3. Create a new `public` repository with name: `<your-github-username>.github.io`. This is where we'll host CV in webpage form.
        - Check `Add a Readme file` checkbox while creating the repository, this will configure `main` branch.
    4. Create a `Github API Token`. [Settings ->  Developer settings -> Personal access token -> Tokens(classic) -> Generate New Token (classic) -> provide repo access(checkbox in first line of scopes) -> Generate]
    5. Add the token to the forked repository as `API_TOKEN_GITHUB`. [repository Settings Tab -> Secrets -> Actions -> Create new secret -> Name(API_TOKEN_GITHUB), Value(<generated-in-previous-step>)].     
    6. Update workflows/node.js.yml and make a commit:
        - destination-github-username: <your-github-username>
        - destination-repository-name: <your-github-username>.github.io
        - user-email: <your-email>

After the commit, build runs[in a few mins] and your resume will be live at `https://<your-username>.github.io`. 

  
#### Bonus: 
Create a short link like `https://bit.ly/pritamprasad` in `bit.ly` [Again FREE] and redirect to your Github Page site. 
