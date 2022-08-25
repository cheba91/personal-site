export const projectsData = [
   {
      key: 1,
      title: 'Soapbox Ninja',
      stack: ['PHP', 'jQuery', 'Wordpress', 'HTML', 'CSS'],
      link: 'https://soapbox.ninja',
      desc: `Forum, where anyone can 
      register and create posts, comments, categories, upload images, and embed youtube videos. 
      All of these elements can be liked or disliked by other users. Users will get a personalized feed 
      based on which topics, users, and categories they follow.`,
      points: [
         'In total 7k lines of PHP and 2.5k of jQuery',
         'AWS S3 for offloading images',
         'AWS Rekognition for detecting sensitive content',
         'Users get notified when something new happens',
         'Infinite scrolls for posts, comments and images',
      ],
   },
   {
      key: 2,
      title: 'Cheba.me',
      link: 'https://github.com/cheba91/personal-site',
      stack: ['Next.js', 'React', 'Material UI'],
      desc: `So, your current location serves as my personal, not too serious website. 
      It was created using my favorite framework Next.js. Each time changes are pushed to 
      GitHub, it automatically deploys to Vercel. It does not have a typical server-side 
      to it and handles the contact form using a serverless function. As of this writing, 
      the score on GTmetrix is 245ms for the largest contentful paint and 641ms for time to interactive.`,
   },
];
