import { IExperienceBlock } from "./components/ExperienceBlock";

const data: IExperienceBlock[] = [
{
  company: "Capsule",
  website: "https://capsule.com",
  city: "New York, NY",
  role: "Engineering Manager",
  from: "April 2019",
  to: "Present",
  bulletPoints: [
    "Lead the team responsible for the Capsule website, as well as the iOS and Android apps",
    "Led 2 teams totalling 13 direct reports, but in order to pivot to help grow the new Test Eng team, currently lead a team of 6, called Retention",
    "Managed the TypeScript migration of all user-facing Capsule IPs",
    "Built the CI/CD and Test pipeline in Jenkins using Cypress",
    "Built and architected 3 generations of deployment and scaling systems",
    "Led the effort to build the Capsule order status/courier tracking system",
    "Work closely with upper management and talent acquisition to grow the team"
  ]
},
{
  company: "x.ai",
  website: "https://x.ai",
  city: "New York, NY",
  role: "Senior Software Engineer II",
  from: "August 2018",
  to: "March 2019",
  bulletPoints: [
    "Build an agentive system that schedules meetings using AI/ML over email and a web UI",
    "Migrate existing services to Typescript-based microservices",
    "Write React email templates and added ability for clients to take action directly from emails instead of requiring natural-language responses, cutting down on spend and chatter",
    "Moved from a git-stored dependency system to a modern, npm ci and private npm repo based paradigm",
    "Work on all areas of the system such as writing web experiences, build and test APIs, modifying deployment systems and architecting new systems",
  ],
},
{
  company: "IPSoft",
  website: "https://www.ipsoft.com",
  city: "New York, NY",
  role: "UI/UX Technical Lead",
  from: "August 2017",
  to: "August 2018",
  bulletPoints: [
    "Engineered a chat application for customer service via AI, in React/Redux",
    "Managed projects and priorities using SCRUM for a team of 5 front-end developers",
    "Reduced build time from 7 minutes to 12 seconds by rebuilding build process with Webpack and Babel",
    "Created new user interface components like pie charts, data masking, and action buttons",
    "Rebuilt Bamboo CI/CD pipeline, streamlined merge -> build -> release -> deployment process",
    "Created reproducible builds with Yarn and a new set of team version management rules",
    "Worked with clients and internal stakeholders to create roadmaps, groom feature set, and change our development cycles to better meet their needs",
    "Made user interface client-customizable, eliminating the need for separate per-client builds and allowing developers to do development instead of operations",
  ],
},
{
  company: "Apprenda LLC",
  website: "https://apprenda.com",
  from: "September 2015",
  to: "February 2017",
  city: "New York, NY",
  role: "Software Engineer",
  bulletPoints: [
    "Apprenda built a competitor to Kubernetes, before k8s existed, and the team went on to make up much of the CNCF and Heptio engineering teams",
    "Led a project to perform in-place, zero-downtime upgrades of the Apprenda platform, collaborating with nearly a dozen engineers in addition to dedicated QA, Product, and Documentation personnel",
    "Led a project to create a central hub for logs/environmental instrumentation of test server networks using the ELK stack and Docker/docker-compose",
    "Utilized Vagrant, Packer, and Chef to spin up user-defined multi-node environments for testing our Platform-as-a-Service directly on developer machines, shortening a 24 hour build-test cycle to 20 minutes",
    "Wrote MSI installation packages (and a new build process around them) to install critical Apprenda services",
    "Product owner for multiple critical tools, such as a command line client for interacting with and scripting the platform, a tool for bulk loading data (users, subscriptions, applications) into the platform, and our mission-critical, failure-tolerant Installer/Upgrader/Uninstaller desktop application (which has more than 150,000 LOC)",
    "Worked in Go, Python, C#, Bash, Scala, and Powershell",
  ],
},
{
  company: "QueBIT Consulting LLC",
  website: "https://quebit.com",
  from: "March 2013",
  to: "September 2015",
  city: "New York, NY",
  role: "Full Stack Engineer",
  bulletPoints: [
    "Worked as a full stack engineer on a tool that let financial professionals easily create realtime web dashboards from Excel spreadsheets",
    "Architected design to allow for reading from any Workbook source such as Google Docs, Apple Numbers, OpenOffice (Factory took a Provider, Provider implemented Interface of reading methods)",
    "Extended DotNetHighCharts API (a HighCharts definition creation library in C#) to produce interactive, data-driven maps (through HighMaps) in JavaScript",
    "Massively refactored the existing code base by encapsulating common code, removing unused historical functions, and splitting large classes to clarify and simplify program flow",
    "Served as primary engineer for a tool to produce scheduled/daily reporting on financial data from TM1 (ReportWORQ). Provided assistance to customers during outages, gathered feedback/implemented improvements, and managed client expectations",
    "Improved data load speed by 250+ times by using batch data pulling to reduce the number of roundtrips over the network/to TM1",
    "Implemented Change-awareness flags/dirty checking across the entire object model to only save deltas which increased save speed by 100+ times",
    "Heavily modified existing Excel Expression evaluator, an Expression-to-C# compiler: Rebuilt expression parsing and AST Abstract Syntax Tree creation, transversal logic, and removed deprecated logical nodes",
    "Used JMeter to stress test, analyze, and report on web page performance under arbitrary loads to ensure Nielsen Ratings could provide an acceptable user experience with their existing hardware configuration with 2,000+ concurrent TM1 users",
    "Reverse engineered the method flow of TM1Web, to spoof authentication, manipulate data, request specific pages based on user input, and log out, while analyzing performance of each step",
  ],
}];

export default data;
