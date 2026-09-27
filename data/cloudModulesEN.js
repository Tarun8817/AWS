// =========================================================
// CLOUD COMPUTING DEFINITIONS (ENGLISH MASTER SOURCE OF TRUTH)
// =========================================================

const CLOUD_MODULES_EN = [
  {
    id: "what-is-cloud",
    term: "What is Cloud Computing?",
    icon: "☁️",
    category: "Foundation",
    definition: "On-demand delivery of compute power, database storage, applications, and other IT resources over the internet with pay-as-you-go pricing.",
    analogy: "Like drawing electricity from a wall outlet instead of building and running your own power generator at home."
  },
  {
    id: "what-is-virtualization",
    term: "What is Virtualization?",
    icon: "🖥️",
    category: "Foundation",
    definition: "A technology that allows a single physical computer/server to run multiple isolated virtual operating systems simultaneously.",
    analogy: "Like dividing a large residential building into individual private apartments with their own doors and utilities."
  },
  {
    id: "what-is-hypervisor",
    term: "What is a Hypervisor?",
    icon: "⚙️",
    category: "Compute",
    definition: "A software layer (Type 1 bare-metal like KVM/ESXi or Type 2 hosted like VirtualBox) that creates, runs, and isolates Virtual Machines from physical hardware.",
    analogy: "Like a traffic controller managing memory and CPU allocation across all virtual machines without conflicts."
  },
  {
    id: "what-is-vm",
    term: "What is a Virtual Machine (VM)?",
    icon: "💻",
    category: "Compute",
    definition: "A digital emulation of a physical computer that runs an OS and applications independently (called EC2 instances in AWS).",
    analogy: "Like a self-contained computer running inside another computer with its own dedicated CPU, RAM, and virtual disk."
  },
  {
    id: "what-is-aws",
    term: "What is AWS (Amazon Web Services)?",
    icon: "🌐",
    category: "Cloud Provider",
    definition: "The world's most widely adopted cloud platform, offering over 200 fully featured services globally from data centers worldwide.",
    analogy: "Like a massive global digital supermarket where developers can rent servers, storage, databases, and AI models instantly."
  },
  {
    id: "why-cloud-vs-onprem",
    term: "Why Use AWS / Cloud (Over On-Premises)?",
    icon: "🚀",
    category: "Strategy",
    definition: "Eliminates high upfront hardware capital expenses (CapEx), offers unlimited elasticity, 99.99% high availability, and allows deploying globally in minutes.",
    analogy: "Instead of buying a bus fleet and maintenance garage, you hail Uber rides on demand whenever you need to travel."
  },
  {
    id: "other-cloud-platforms",
    term: "What are Other Major Cloud Platforms?",
    icon: "🏢",
    category: "Cloud Provider",
    definition: "Alongside AWS (market leader), key cloud platforms include Microsoft Azure (enterprise focus), Google Cloud Platform / GCP (data & AI focus), and Oracle Cloud.",
    analogy: "Similar to choosing between Amazon, Microsoft, and Google as your global IT infrastructure utility provider."
  },
  {
    id: "cloud-service-models",
    term: "IaaS vs PaaS vs SaaS (Cloud Models)",
    icon: "📦",
    category: "Cloud Models",
    definition: "IaaS gives raw infrastructure (EC2, VPC); PaaS gives a managed runtime platform (Elastic Beanstalk); SaaS gives fully managed software (Gmail, Slack).",
    analogy: "IaaS = Renting an unfurnished apartment; PaaS = Renting a furnished hotel room; SaaS = Ordering room service."
  },
  {
    id: "cloud-deployment-models",
    term: "Public vs Private vs Hybrid Cloud",
    icon: "🔀",
    category: "Cloud Models",
    definition: "Public cloud is shared infrastructure open to the public; Private cloud is dedicated to one organization; Hybrid cloud bridges on-premises with public cloud.",
    analogy: "Public = Public bus; Private = Private car; Hybrid = Taking your car to the train station and riding the train into the city."
  },
  {
    id: "regions-and-azs",
    term: "What are AWS Regions & Availability Zones?",
    icon: "🌍",
    category: "Architecture",
    definition: "A Region is a physical geographic location in the world; each Region contains multiple isolated, physically separated Availability Zones (AZs) connected by low-latency fiber.",
    analogy: "Region = A city (e.g. Mumbai); Availability Zones = 3 separate disaster-proof power-independent data centers within that city."
  },
  {
    id: "shared-responsibility-model",
    term: "AWS Shared Responsibility Model",
    icon: "🛡️",
    category: "Security",
    definition: "AWS is responsible for 'Security OF the Cloud' (physical data centers, hardware, hypervisors); the Customer is responsible for 'Security IN the Cloud' (OS patches, data, IAM, firewall rules).",
    analogy: "AWS secures the apartment building entrance and plumbing; you lock your own apartment front door."
  },
  {
    id: "pay-as-you-go-model",
    term: "Pay-As-You-Go & Free Tier",
    icon: "💳",
    category: "Billing",
    definition: "You pay only for the exact seconds/hours of compute and gigabytes of storage you consume with no long-term contracts; AWS Free Tier provides 12 months free access for learning.",
    analogy: "Like your home water or gas bill—you only pay for what flows through your meter."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLOUD_MODULES_EN;
}
