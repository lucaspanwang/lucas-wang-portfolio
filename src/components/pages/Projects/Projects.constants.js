export const projcetItems = [
  {
    hash: "v-max-official",
    imgSrc: "/images/vmax_preview.jpg",
    projectTitle: "V-MAX Official Website",
    description: (
      <>
        The V-MAX Official Website serves as the primary digital portal for
        V-MAX Media Corp, offering a comprehensive overview of the company's
        services, portfolio videos, case studies, and a blog page that shares
        articles on the latest trends and news. <br /> <br />
        At V-MAX, I led the complete development cycle of the company website,
        from inception to deployment, and I was responsible for over 90% of the
        website's development.. My responsibilities included building the
        website from scratch and optimizing its performance, notably improving
        running speed and SEO. <br /> <br />
        <b>Key Achievements:</b> <br />
        <b>Performance Optimization:</b> Enhanced website performance by 70% in
        Lighthouse metrics through techniques such as lazy loading, CSS sprites,
        and Lottie animations. <br />
        <b>SEO Improvement</b>: Significantly improved SEO using React Helmet
        and a sitemap generator. <br />
        <b>CI/CD Implementation</b>: Established CI/CD pipelines on AWS
        infrastructure, leveraging AWS S3 and GitHub Actions for deployment.
        This streamlined development, reduced maintenance efforts, and cut
        front-end deployment costs by 40%. <br />
        <b>CMS Integration</b>: Integrated Strapi as the content management
        system for the blog page. I deployed Strapi using Node.js and utilized
        its APIs to support frontend blog display.
        <br /> <b>User-Friendly CMS:</b> Developed a CMS that allows the
        marketing team to easily post and edit real-time blogs, including
        images, SEO metadata, and scalable features like blog recommendation and
        comment sections.
      </>
    ),
    techStacks: ["React", "Redux", "Javascript", "Node.js", "Strapi CMS"],
    link: "https://www.v-max.ca/",
    timeRange: "Sep 2023 – Apr 2024 · 8 mos",
    desktop: "/images/vmax-official-desktop.jpg",
    mobile: "/images/vmax-official-mobile.jpg",
  },
  {
    hash: "v-max-dashboard",
    imgSrc: "/images/vmax_dashboard.jpg",
    projectTitle: "V-MAX Dashboard",
    description: (
      <>
        The V-MAX Dashboard is an integrated platform designed to streamline the
        process of earning commissions for creators and managing promotional
        campaigns for brands. It represents a comprehensive evolution from its
        predecessors, merging the functionalities of both the Shop Dashboard and
        the Creator Dashboard. In addition to consolidating these features, the
        V-MAX Dashboard introduces an advanced AI tool, enhancing the user
        experience by simplifying operations and providing intelligent insights.
        This all-encompassing solution caters to the dynamic needs of today's
        digital creators and brands, offering a seamless interface for
        collaboration and growth.
        <br /> <br />
        For this project, I collaborated with a front-end developer, two
        back-end developers, a ux designer and a PM, to create an innovative
        dashboard website for our investors. We utilized cutting-edge
        technologies such as Next.js and Tailwind CSS, enabling us to deliver a
        professional and efficient website within a fast-paced development
        environment.
      </>
    ),
    techStacks: [
      "React",
      "Redux",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JSON Server",
    ],
    timeRange: "Dec 2023 – Apr 2024 · 5 mos",
  },
  {
    hash: "hero-mobile-app",
    imgSrc: "/images/hero_Mobile.jpg",
    projectTitle: "Hero Mobile App (V-MAX)",
    description: (
      <>
        Hero Mobile App is a re-designed app for one of our clients to assists
        customers in applying for, managing, and monitoring their prepaid cards,
        including functionalities for spending and topping up.
        <br />
        <br />
        During the development of this app, I served as the front-end tech lead
        in a newly established front-end team consisting of three developers.
        Initially, I was responsible for preparing the project, which included
        writing technical requirement documents and establishing code best
        practices. Throughout the development process, we successfully completed
        the modules for the sign-up pages, login pages, and home page. We
        conducted frequent testing to ensure a seamless user experience and
        robust security, incorporating comprehensive error handling using Formik
        and Yup.
      </>
    ),
    techStacks: ["React Native", "Expo", "Redux", "AWS Cognito", "Formik"],
    timeRange: "Dec 2023 – Feb 2024 · 3 mos",
  },
];

export const OVERVIEW_STATUS = {
  COVER: 0,
  DESKTOP: 1,
  MOBILE: 2,
};
