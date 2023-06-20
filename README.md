# Remember me: Login Form

Create a `login form` with two input fields (`username` and `password`) and a `remember me` checkbox. If the "remember me" checkbox is checked, store the username and password in local storage. If the checkbox is unchecked, remove the stored username and password from local storage.

## Instructions

- There should be a heading in an `h1` tag with the text `Login Form`
- Create a `form` with fields:

  - `username`: type `text` and placeholder `Username` and id `username`
  - `password`: type `password` and placeholder `Password` and id `password`
  - `checkbox`: type `checkbox` and id `checkbox` with a label that says `Remember me`
  - `submit`: input with type `submit`, id `submit` and value `Submit`

- When the submit button is clicked:

  - If checkbox is checked: Save details to localstorage
  - If not: Do not save details
  - Show alert with the text as `Logged in as <username>`

- If there are saved details: show another button with the id `existing` and text as `Login as existing user`
- When this button is clicked, it should show the alert as `Logged in as <saved username>`
