import Head from 'next/head';

export default function MetaHead({
   title = 'Cheba - Web Developer',
   keywords = 'full stack web developer, personal website, hire full-stack web developer, hire MERN stack developer, hire Next.js developer',
   description = `Hey, I'm Cheba, a full-stack web developer. I enjoy working on innovative projects that aim for the highest quality rather than just fast delivery.`,
   image = '/logo.jpg', // link to image of current page
   ogType = 'blog', // type of current page
}) {
   const staticData = {
      baseUrl: 'https://www.cheba.me',
      companyName: 'Cheba - Personal website',
      twitterHandle: '@BlazCheba',
   };
   return (
      <Head>
         {/* //basic metadata */}
         <title>{title}</title>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta name="description" content={description} />
         <meta name="keywords" content={keywords} />
         {/* //twitter metadata */}
         <meta name="twitter:card" content="summary" />
         <meta name="twitter:site" content={staticData.twitterHandle} />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={description} />
         <meta name="twitter:image" content={staticData.baseUrl + image} />
         {/* //canonical link */}
         <link rel="canonical" href={staticData.baseUrl} />
         {/* //open graph metadata */}
         <meta property="og:locale" content="en_US" />
         <meta property="og:site_name" content={staticData.companyName} />
         <meta property="og:type" content={ogType} />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         <meta property="og:image" content={staticData.baseUrl + image} />
         <meta property="og:url" content={staticData.baseUrl} />
      </Head>
   );
}
