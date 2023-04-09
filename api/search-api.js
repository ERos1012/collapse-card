export default async function handler(request, res) {
  const search = request.query.search || "";

  var badges = [
    {
      badgeHeader: "Amazon Cognito",
      badgeName: "Amazon Cognito",
      badgeImage: "",
      badgeDescription:
        "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
      badgeURL:
        "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
      badgeCreator: "Kevin Hantman",
      timeToComplete: "4.0 hours",
      stepsName: "Amazon Cognito",
      stepsDescription: "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
      stepsTime: "4.0 hours",
    },
    {
      badgeHeader: "Amazon I AM",
      badgeName: "Amazon I AM",
      badgeImage: "",
      badgeDescription: "Create a I AM account with MFA enabled and Admin permissions",
      badgeURL: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",
      badgeCreator: "John Pork",
      timeToComplete: "2.0 hours",
      stepsName: "Amazon I AM",
      stepsDescription: "Create a I AM account with MFA enabled and Admin permissions",
      stepsTime: "2.0 hours",
    },
    {
      badgeHeader: "Signing up for AWS Web Services",
      badgeName: "Signing up for AWS Web Services",
      badgeImage: "",
      badgeDescription: "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
      badgeURL: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",
      badgeCreator: "Joshua Hantman",
      timeToComplete: "1.0 hours",
      stepsName: "Signing up for AWS Web Services",
      stepsDescription: "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
      stepsTime: "1.0 hours",
    },
    {
      badgeHeader: "AWS- LAMBDA Phase 1",
      badgeName: "AWS- LAMBDA Phase 1",
      badgeImage: "",
      badgeDescription: "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
      badgeURL: "https://aws.amazon.com/lambda",
      badgeCreator:  "Joshua Hantman",
      timeToComplete: "2.0 hours",
      stepsName: "AWS- LAMBDA Phase 1",
      stepsDescription: "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
      stepsTime: "2.0 hours",
      step1: "Creating lamb",
      step2: "hello",
      timeToComplete2: "3.0",
    },
    {
      badgeHeader: "Amazon S3 Phase 1",
      badgeName: "Amazon S3 Phase 1",
      badgeImage: "",
      badgeDescription: "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service. Getting started look through this page",
      badgeURL: "https://docs.aws.amazon.com/s3/?id=docs_gateway",
      badgeCreator: "Joshua Hantman",
      timeToComplete: "5.0 hours",
      stepsName: "Amazon S3 Phase 1",
      stepsDescription: "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service. Getting started look through this page",
      stepsTime: "5.0 hours",
    },
    {
      badgeHeader: "Docker the Dockening",
      badgeName: "Docker the Dockening",
      badgeImage: "",
      badgeDescription: "He docks",
      badgeURL: "https://docs.aws.amazon.com/s3/?id=docs_gateway",
      badgeCreator: "Jeff Jeffington",
      timeToComplete: "5.0 hours",
      stepsName: "Docker the Dockening",
      stepsDescription: "He docks",
      stepsTime: "5.0 hours",
    },
    {
      badgeHeader: "React: Hi",
      badgeName: "React: Hi",
      badgeImage: "",
      badgeDescription: "Pretty sad",
      badgeURL: "https://docs.aws.amazon.com/s3/?id=docs_gateway",
      badgeCreator: "Jeff Jeffington",
      timeToComplete: "5.0 hours",
      stepsName: "React: Hi",
      stepsDescription: "Pretty sad",
      stepsTime: "5.0 hours",
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
