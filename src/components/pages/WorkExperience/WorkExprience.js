import "./WorkExperience.scss";
import SemiBold from "../../SemiBold";

const workExpItems = [
  {
    imgSrc: "/images/VMAX_Main_Logo_Color.webp",
    companyName: "V-MAX Media",
    companyLink: "https://www.linkedin.com/company/v-max-media-corp/mycompany/",
    jobTitle: "Software Developer",
    place: "Vancouver, Canada",
    timeRange: "Sep 2023 – Present",
    detailList: [
      <>
        Spearheaded the development of the V-MAX Official Website, 3 dashboard
        websites, and a finance mobile app from scratch using{" "}
        <SemiBold>Next.js, Tailwind CSS, JSON Server,</SemiBold> and{" "}
        <SemiBold>React Native</SemiBold>. Achieved high efficiency in software
        delivery, and helped to secure $1 million + in investment for the
        startup
      </>,
      <>
        Collaborated closely with brand partners and vendors to develop landing
        pages with <SemiBold>Shopify Liquid</SemiBold> and optimize WordPress
        sites, contributing to a service that achieved a 400% surge in online
        sales
      </>,
      <>
        • Boosted the company website’s performance by 70% in Lighthouse metrics
        via optimizations (<SemiBold>lazy loading, CSS sprites,</SemiBold>{" "}
        Lottie animation) and significantly enhanced <SemiBold>SEO</SemiBold>{" "}
        utlizing React Helmet and a sitemap generator
      </>,
      <>
        Established CI/CD pipelines on AWS infrastructure, utilizing{" "}
        <SemiBold>AWS S3</SemiBold> and <SemiBold>GitHub Actions</SemiBold> for
        web app deployment, which streamlined development maintenance and
        reduced front-end deployment costs by 40%
      </>,
    ],
  },
  {
    imgSrc: "/images/HSBC-symbol.png",
    companyName: "HSBC",
    companyLink: "https://www.linkedin.com/company/hsbc/",
    jobTitle: "Software Developer",
    place: "Vancouver, Canada",
    timeRange: "Jun 2022 – Apr 2023",
    detailList: [
      <>
        Collaborated with global team members to develop responsive websites for
        HSBC's account opening systems in Mexico, the US, and Canada, utilizing
        technologies such as <SemiBold>React, JavaScript, Redux</SemiBold> and{" "}
        <SemiBold>Node.js</SemiBold>
      </>,
      <>
        Independently built a comprehensive{" "}
        <SemiBold>Tealium tag management system</SemiBold> for the Mexico
        account opening system, incorporating view tracking and event tracking
        to monitor progress throughout the entire customer journey, enabling
        seamless customer actions monitoring for improved decision-making and a
        superior customer experience
      </>,
      <>
        Implemented highly reusable components, including a Mexican address
        searching component developed with the <SemiBold>Loqate API</SemiBold>,
        which integrated address autofill and validation, ensuring efficient and
        accurate user experiences
      </>,
      <>
        Created and deployed over 10 web pages that facilitated smooth customer
        information uploading through forms and Incode authentication, ensuring
        effective form validation using <SemiBold>Formik</SemiBold> and{" "}
        <SemiBold>Yup</SemiBold>.
      </>,
      <>
        Intergrated over 10 xAPIs into front-end applications using{" "}
        <SemiBold>REST API</SemiBold>, supporting both real and mock APIs.
        Leveraged <SemiBold>Node.js</SemiBold> and <SemiBold>Express</SemiBold>{" "}
        to develop custom mock APIs and utilized test harnesses to custom
        scenario simulations, ensuring efficient and targeted testing processes
      </>,
    ],
  },
  {
    imgSrc: "/images/ss&c_logo.png",
    companyName: "SS&C Technologies",
    companyLink: "https://www.linkedin.com/company/ss-c-technologies/",
    jobTitle: "Software Developer Intern",
    place: "Beijing, China",
    timeRange: "Jun 2021 – Sep 2021",
    detailList: [
      <>
        Collaborated with a global team across Beijing and San Francisco to
        develop a cross-platform, browser-based research management system using{" "}
        <SemiBold>Angular, TypeScript, Sass, RxJS,</SemiBold> and{" "}
        <SemiBold>Kendo UI</SemiBold>
      </>,
      <>
        Led the development of a crucial admin console feature, enabling
        administrators to efficiently manage users, notes, and entities using AG
        Grid. Leveraged <SemiBold>REST API</SemiBold> integration to seamlessly
        connect with the back-end, greatly enhancing the user experience for
        resource management tasks
      </>,
      <>
        Significantly enhanced the map tile feature by leveraging the{" "}
        <SemiBold>Google Maps API</SemiBold> to enable support for multiple
        destinations, while also implementing advanced functionalities such as
        hiding and expanding functions for boxes. This resulted in an improved
        user experience and enhanced overall usability
      </>,
      <>
        Demonstrated a commitment to quality by implementing rigorous unit tests
        for new code. Utilized <SemiBold>Karma</SemiBold> to write and execute
        unit tests, resulting in a test coverage exceeding 90%
      </>,
    ],
  },
];

const WorkExpCard = ({ workExpItem, screenWidth }) => {
  return (
    <div className="column-direction-container work-exp-card-container">
      <div className="work-exp-header">
        <div className="row-direction-container company-row-container">
          <a
            href={workExpItem.companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={workExpItem.imgSrc} alt={workExpItem.imgSrc} />
          </a>
          <div className="column-direction-container work-exp-header-col1">
            <div className="row-direction-container company-container">
              <SemiBold>{workExpItem.companyName}</SemiBold>
              {/* <Icons.externalLink className="company-link-icon" /> */}
            </div>
            <p className="font-normal">{workExpItem.jobTitle}</p>
            {screenWidth <= 600 && (
              <>
                <p>
                  <SemiBold>{workExpItem.place}</SemiBold>
                </p>
                <p className="font-normal">{workExpItem.timeRange}</p>
              </>
            )}
          </div>
        </div>
        {screenWidth > 600 && (
          <div className="column-direction-container work-exp-header-col2">
            <p>
              <SemiBold>{workExpItem.place}</SemiBold>
            </p>
            <p className="font-normal">{workExpItem.timeRange}</p>
          </div>
        )}
      </div>
      <ul className="column-direction-container work-exp-detail-container">
        {workExpItem.detailList.map((detailItem) => (
          <li className="work-exp-detail-list">{detailItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default function WorkExperience({ screenWidth, workExprienceRef }) {
  return (
    <section className="section work-experience-section" ref={workExprienceRef}>
      <div className="title-container">Work Experience</div>
      <div
        className="column-direction-container work-exp-cards-wrapper"
        style={{ width: "100%" }}
      >
        {workExpItems.map((workExpItem, index) => (
          <WorkExpCard
            workExpItem={workExpItem}
            key={index}
            screenWidth={screenWidth}
          />
        ))}
      </div>
    </section>
  );
}
