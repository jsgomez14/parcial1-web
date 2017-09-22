var express = require('express');
var router = express.Router();
var GitHubApi = require("github");

router.get('/getFollowers/:user', function(req, res){
  var github = new GitHubApi({});

  github.users.getFollowingForUser({
    username: req.params.user
  }, function(err, data){
    res.json(data);
  });
});
module.exports = router;