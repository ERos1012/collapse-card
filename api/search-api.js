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
      badgeCreator: "John Doe",
      timeToComplete: "4.0 hours",
      stepsName: "Amazon Cognito",
      stepsDescription: "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
      stepsTime: "4.0 hours",
      step1: "Cognito Intro",
      step2: "The world of Amazon",
      timeToComplete2: "3.0 hours",
      aproxTime: "7.0 hours",
      infoLink: "test again",
    },
    {
      badgeHeader: "Amazon I AM",
      badgeName: "Amazon I AM",
      badgeImage: "",
      badgeDescription: "Create a I AM account with MFA enabled and Admin permissions",
      badgeURL: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",
      badgeCreator: "Jane Doe",
      timeToComplete: "2.0 hours",
      stepsName: "Amazon I AM",
      stepsDescription: "Create a I AM account with MFA enabled and Admin permissions",
      stepsTime: "2.0 hours",
      step1: "Who is Amazon",
      step2: "I am?",
      timeToComplete2: "2.0 hours",
      aproxTime: "4.0 hours",
      infoLink: "test again",
    },
    {
      badgeHeader: "Signing up for AWS Web Services",
      badgeName: "Signing up for AWS Web Services",
      badgeImage: "",
      badgeDescription: "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
      badgeURL: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",
      badgeCreator: "James Smith",
      timeToComplete: "1.0 hours",
      stepsName: "Signing up for AWS Web Services",
      stepsDescription: "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
      stepsTime: "1.0 hours",
      step1: "AWS Intro",
      step2: "AWS a journey",
      timeToComplete2: "2.0 hours",
      aproxTime: "3.0 hours",
      infoLink: "test again",
    },
    {
      badgeHeader: "AWS-LAMBDA Phase 1",
      badgeName: "AWS-LAMBDA Phase 1",
      badgeImage: "",
      badgeDescription: "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
      badgeURL: "https://aws.amazon.com/lambda",
      badgeCreator:  "Marie Harrison",
      timeToComplete: "2.0 hours",
      stepsName: "AWS- LAMBDA Phase 1",
      stepsDescription: "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
      stepsTime: "2.0 hours",
      step1: "Creating your first lambda function",
      step2: "Putting in your Hello Lambda Node.js",
      timeToComplete2: "7.0 hours",
      aproxTime: "9.0 hours",
      infoLink: "test again",
    },
    {
      badgeHeader: "Amazon S3 Phase 1",
      badgeName: "Amazon S3 Phase 1",
      badgeImage: "",
      badgeDescription: "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service. Getting started look through this page",
      badgeURL: "https://docs.aws.amazon.com/s3/?id=docs_gateway",
      badgeCreator: "Noel Johnson",
      timeToComplete: "5.0 hours",
      stepsName: "Amazon S3 Phase 1",
      stepsDescription: "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service. Getting started look through this page",
      stepsTime: "5.0 hours",
      step1: "S3 Phase Intro",
      step2: "Moving to Phase 2",
      timeToComplete2: "1.0 hours",
      aproxTime: "6.0 hours",
      infoLink: "test again",
    },
    {
      badgeHeader: "Pusheen: how to be an adorbale cat",
      badgeName: "Pusheen: how to be an adorbale cat",
      badgeImage: "",
      badgeDescription: "Learn how Pusheen relaxes while also being the most adorable cat. Keep completing steps to see exclsuive interviews with Pusheen and friends.",
      badgeURL: "https://docs.aws.amazon.com/s3/?id=docs_gateway",
      badgeCreator: "Manali Sanyal",
      timeToComplete: "1.0 hours",
      stepsName: "",
      stepsDescription: "",
      stepsTime: "5.0 hours",
      step1: "The cat life: intro",
      step2: "Different hobbies of cats",
      timeToComplete2: "2.0 hours",
      aproxTime: "3.0 hours",
      infoLink: "test again",
    },
    {
      badgeHeader: "Pikachu:the infamous pokemon",
      badgeName: "Pikachu:the infamous pokemon",
      badgeImage: "",
      badgeDescription: "Everyone loves Pikachu! Learn about the life of an amazing Pokemon",
      badgeURL: "https://docs.aws.amazon.com/s3/?id=docs_gateway",
      badgeCreator: "Eric Rosario",
      timeToComplete: "0. 30 hours",
      stepsName: "",
      stepsDescription: "Everyone loves Pikachu! Learn about the life of an amazing Pokemon",
      stepsTime: "5.0 hours",
      step1: "Pokemon, what a world",
      step2: "How to befriend other pokemon",
      timeToComplete2: "1.0 hours",
      aproxTime: "1.30 hours",
      infoLink: "test again",
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
