let data = {
  username: "edwardandrews", // No leading @ here
  homeLabel: "aldreth.com",
  homeUrl: "https://aldreth.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(
  data.homeUrl
)}/`;

module.exports = data;
