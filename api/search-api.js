export default async function handler(request, res) {
  const search = request.query.search || "";
  var badges = [
    {
      badgeHeader: "Badge Header",
      badgeName: "Badge Name",
      badgeUrl: "Badge Url",
      badgeDescription: "Badge Description",
      badgeImage: "Badge Image",
      badgeCreator: "Badge Creator",
      timeToComplete: "Time To Complete",
      stepsName: "Steps Name",
      stepsDescription: "Steps Description",
      stepsTime: "Steps Time",
    },
    {
      badgeHeader: "More Header",
      badgeName: "More Name",
      badgeUrl: "More Url",
      badgeDescription: "More Description",
      badgeImage: "More Image",
      badgeCreator: "More Creator",
      timeToComplete: "More To Complete",
      stepsName: "More Name",
      stepsDescription: "More Description",
      stepsTime: "More Time",
    },
    {
      badgeHeader: "Badge Header",
      badgeName: "Badge Name",
      badgeUrl: "Badge Url",
      badgeDescription: "Badge Description",
      badgeImage: "Badge Image",
      badgeCreator: "Badge Creator",
      timeToComplete: "Time To Complete",
      stepsName: "Steps Name",
      stepsDescription: "Steps Description",
      stepsTime: "Steps Time",
    },
  ];

  badges.map((badge) => {
    badge.index =
      badge.badgeName.toLowerCase() +
      " " +
      badge.badgeHeader.toLowerCase() +
      " " +
      badge.badgeCreator.toLowerCase() +
      " " +
      badge.badgeDescription.toLowerCase() +
      " " +
      badge.stepsName.toLowerCase() +
      " " +
      badge.stepsTime.toLowerCase() +
      " " +
      badge.timeToComplete.toLowerCase();
  });

  badges = badges.filter((badge) => {
    return badge.index.indexOf(search.toLowerCase()) > -1;
  });

  res.setHeader("Cache-Control", "max-age=0, s-maxage=1800");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  res.json(badges);
}
