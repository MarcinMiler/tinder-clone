workflow "Deploy to Heroku" {
  on = "push"
  resolves = "release"
}

action "login" {
  uses = "actions/heroku@master"
  args = "container:login"
  secrets = ["HEROKU_API_KEY"]
}

action "push" {
  uses = "actions/heroku@master"
  needs = "login"
  args = "container:push -a evening-hamlet-82255 web"
  secrets = ["HEROKU_API_KEY"]
}

action "release" {
  uses = "actions/heroku@master"
  needs = "push"
  args = "container:release -a evening-hamlet-82255 web"
  secrets = ["HEROKU_API_KEY"]
}
