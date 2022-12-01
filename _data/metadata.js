let data = {
  username: "edwardandrews", // No leading @ here
  homeLabel: "tweets.aldreth.com/",
  homeUrl: "https://tweets.aldreth.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(
  data.homeUrl
)}/`;

module.exports = data;
