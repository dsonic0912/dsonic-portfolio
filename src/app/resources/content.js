import { Logo } from "@/once-ui/components";

const person = {
  firstName: "David",
  lastName: "Tung",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Semi Vibe Coder",
  avatar: "/images/avatar.png",
  email: "example@gmail.com",
  location: "America/Vancouver", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Mandarin", "Japanese", "Taiwanese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dsonic0912",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ta-chien-david-t-96bb7456/",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  // {
  //   name: "Email",
  //   icon: "email",
  //   link: `mailto:${person.email}`,
  // },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  headline: <>{person.name}</>,
  featured: {
    display: false,
  },
  subline: (
    <>
      Senior Software Developer with 10+ years of experience building scalable
      web applications and data platforms using Python, Django, React, and cloud
      services (GCP, AWS).
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Senior Software Developer with 10+ years of experience building scalable
        web applications and data platforms using Python, Django, React, and
        cloud services (GCP, AWS). Skilled in performance optimization, modern
        frontend migrations, data pipelines, and CI/CD. Strong track record of
        delivering high-quality, maintainable solutions in fast-paced,
        collaborative environments.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Citylitics",
        timeframe: "Oct 2021 - Oct 2024",
        role: "Senior Software Developer",
        achievements: [
          <>
            Redesigned the platform architecture and data workflows to enhance
            user experience and surface actionable insights on infrastructure
            project leads within a public infrastructure search and reporting
            system.
          </>,
          <>
            Optimized Django queries and DRF serializers, resulting in a 10x API
            performance improvement.
          </>,
          <>
            Implemented backend pagination and dynamic pre-populated filters,
            reducing data load times from 30 seconds to under 3 seconds.
          </>,
          <>
            Led migration of the entire frontend codebase to TypeScript,
            boosting maintainability and code reliability.
          </>,
          <>
            Overhauled local development setup, CI/CD pipeline, and
            documentation to streamline onboarding and reduce ramp-up time.
          </>,
          <>
            Developed a Dataflow pipeline to export data from Elasticsearch to
            BigQuery for performance and coverage analytics.
          </>,
          <>
            Built Airflow pipelines to analyze scraped data, improving
            downstream data quality and crawler effectiveness.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Procurify",
        timeframe: "July 2016 - Aug 2021",
        role: "Senior Software Developer",
        achievements: [
          <>
            Designed and developed new features for a business procurement
            management platform to streamline purchasing workflows and enhance
            user efficiency.
          </>,
          <>
            Designed and developed RESTful APIs using Django REST Framework to
            support mobile and web applications.
          </>,
          <>
            Increased test coverage to 80% by writing unit and integration tests
            using PyTest.
          </>,
          <>
            Migrated a legacy codebase of 50,000+ lines from Python 2 to Python
            3.
          </>,
          <>
            Collaborated with frontend developers to transition the UI from
            AngularJS to React.
          </>,
          <>
            Designed and implemented an event scheduler service in Go,
            integrated within the core platform.
          </>,
          <>
            Led the integration of Stripe Connect for managing spend via
            company-issued credit cards.
          </>,
        ],
        images: [],
      },
      {
        company: "LBSTek",
        timeframe: "June 2014 - June 2016",
        role: "Senior Full Stack Developer",
        achievements: [
          <>
            Built a location-based, online-to-offline dating platform,
            increasing daily active users from 50 to 500.
          </>,
          <>
            Refactored legacy Django views to Django REST Framework, improving
            scalability and maintainability.
          </>,
          <>
            Developed a location-based travel app using Swift (iOS) and Kotlin
            (Android) within 3 months.
          </>,
          <>
            Replaced polling-based chat functionality with a real-time Socket.IO
            solution, enhancing responsiveness.
          </>,
          <>
            Migrated frontend codebase from jQuery to React, significantly
            improving performance and maintainability.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
