//added start in scripts to run this code from the npm
// console.log("hello arvind");


//he deployed on digital ocean but i will not because i know how to do this so just see the next video

require('dotenv').config()

const express = require("express");
const app = express();
const port = 4000;

const github_data = {
    "login": "Arvindchoudhary21",
    "id": 121598096,
    "node_id": "U_kgDOBz9wkA",
    "avatar_url": "https://avatars.githubusercontent.com/u/121598096?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Arvindchoudhary21",
    "html_url": "https://github.com/Arvindchoudhary21",
    "followers_url": "https://api.github.com/users/Arvindchoudhary21/followers",
    "following_url": "https://api.github.com/users/Arvindchoudhary21/following{/other_user}",
    "gists_url": "https://api.github.com/users/Arvindchoudhary21/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Arvindchoudhary21/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Arvindchoudhary21/subscriptions",
    "organizations_url": "https://api.github.com/users/Arvindchoudhary21/orgs",
    "repos_url": "https://api.github.com/users/Arvindchoudhary21/repos",
    "events_url": "https://api.github.com/users/Arvindchoudhary21/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Arvindchoudhary21/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 25,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-12-29T05:50:21Z",
    "updated_at": "2025-01-27T15:54:59Z"
  }


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("twitter of arvind choudhary");
});

app.get("/login" , (req,res)=>{
    res.send("<h1>hello in h1</h1>")
})

app.get("/youtube" , (req, res)=>{
    res.send("<h2>hello youtube in h2</h2>")
})

app.get("/github" , (req,res) =>{
    res.json(github_data);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
