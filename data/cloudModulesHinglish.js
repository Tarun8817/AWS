// =========================================================
// CLOUD COMPUTING DEFINITIONS (1:1 HINGLISH MIRROR)
// =========================================================

const CLOUD_MODULES_HINGLISH = [
  {
    id: "what-is-cloud",
    term: "What is Cloud Computing? (Cloud kya hai?)",
    icon: "☁️",
    category: "Foundation",
    definition: "Internet ke through on-demand computing resources (servers, storage, databases, networking) rent karna bina physical hardware khareede.",
    analogy: "Ghar par apna generator lagane ki jagah bijli board se power lena aur sirf use kiye units ka bill dena."
  },
  {
    id: "what-is-virtualization",
    term: "What is Virtualization? (Virtualization kya hai?)",
    icon: "🖥️",
    category: "Foundation",
    definition: "Aisi technology jisse ek single physical server ko software ki madad se multiple isolated virtual machines (VMs) mein baanta jaata hai.",
    analogy: "Ek badi building ko alag-alag private flats mein divide karna jisme har flat ka apna gate aur meter hota hai."
  },
  {
    id: "what-is-hypervisor",
    term: "What is a Hypervisor? (Hypervisor kya hota hai?)",
    icon: "⚙️",
    category: "Compute",
    definition: "Ek software layer jo physical server ke CPU/RAM ko manage karke multiple Virtual Machines ko safely run aur isolate karta hai.",
    analogy: "Ek traffic police ki tarah jo sabhi virtual machines ko bina kisi conflict ke unka hissa (RAM/CPU) allot karta hai."
  },
  {
    id: "what-is-vm",
    term: "What is a Virtual Machine? (VM kya hai?)",
    icon: "💻",
    category: "Compute",
    definition: "Software par chalne wala ek complete computer jo apna alag OS (Linux/Windows) chalata hai; AWS mein isko EC2 instance bolte hain.",
    analogy: "Ek computer ke andar software ke zariye chalne wala ek aur poora computer."
  },
  {
    id: "what-is-aws",
    term: "What is AWS? (AWS kya hai?)",
    icon: "🌐",
    category: "Cloud Provider",
    definition: "Amazon ki world-leading cloud platform jo 200+ services (servers, storage, AI, database) globally data centers ke through provide karti hai.",
    analogy: "Developers ka ek digital mall jahan se aap 1-click mein servers (EC2), storage (S3) aur database (RDS) rent kar sakte hain."
  },
  {
    id: "why-cloud-vs-onprem",
    term: "Why Use AWS / Cloud? (On-Prem se behtar kyu?)",
    icon: "🚀",
    category: "Strategy",
    definition: "Servers khareedne ka lakho ka kharcha (CapEx) khatam, jab traffic badhe tab seconds mein auto-scale aur 99.99% uptime milta hai.",
    analogy: "Apni car aur driver maintain karne ke bajaye zaroorat padne par Ola/Uber book karna."
  },
  {
    id: "other-cloud-platforms",
    term: "Other Cloud Platforms (Azure, GCP, etc.)",
    icon: "🏢",
    category: "Cloud Provider",
    definition: "AWS ke alawa Microsoft Azure (corporate & Windows focus), Google Cloud Platform / GCP (data & AI focus) aur Oracle Cloud major platforms hain.",
    analogy: "Jaise telecom mein Jio, Airtel aur Vi hain, waise hi cloud market mein AWS, Azure aur Google Cloud hain."
  },
  {
    id: "cloud-service-models",
    term: "IaaS vs PaaS vs SaaS (Cloud Models)",
    icon: "📦",
    category: "Cloud Models",
    definition: "IaaS mein raw server milta hai (EC2); PaaS mein environment ready milta hai bas code run karo (Beanstalk); SaaS mein poora software ready milta hai (Gmail).",
    analogy: "IaaS = Khali flat rent karna; PaaS = Furnished hotel room lena; SaaS = Restaurant se khana order karna."
  },
  {
    id: "cloud-deployment-models",
    term: "Public vs Private vs Hybrid Cloud",
    icon: "🔀",
    category: "Cloud Models",
    definition: "Public cloud sabhi ke liye open hota hai (AWS); Private cloud sirf ek company ka internal data center hota hai; Hybrid cloud dono ko aapas mein jorta hai.",
    analogy: "Public = Public bus; Private = Apni personal bike; Hybrid = Bike se metro station tak jaana aur aage metro se travel karna."
  },
  {
    id: "regions-and-azs",
    term: "Regions & Availability Zones (AZs)",
    icon: "🌍",
    category: "Architecture",
    definition: "Region matlab geographical city (jaise Mumbai ap-south-1); har Region ke andar multiple disaster-proof data centers hote hain jinhe Availability Zones (AZs) bolte hain.",
    analogy: "Region = Mumbai City; Availability Zones = Mumbai ke 3 alag-alag areas mein bane 3 high-security data centers."
  },
  {
    id: "shared-responsibility-model",
    term: "AWS Shared Responsibility Model",
    icon: "🛡️",
    category: "Security",
    definition: "AWS data center aur hardware ki security sambhalta hai ('Security OF the Cloud'); user apne data, passwords aur OS firewall ko sambhalta hai ('Security IN the Cloud').",
    analogy: "Society ka guard building ke main gate ki security dekhta hai; aap apne flat ke darwaze par lock khud lagate hain."
  },
  {
    id: "pay-as-you-go-model",
    term: "Pay-As-You-Go & Free Tier",
    icon: "💳",
    category: "Billing",
    definition: "Jitne minute server chalega sirf uska charge lagega, koi monthly lock-in contract nahi; naye users ko 1 saal free tier practice ke liye milta hai.",
    analogy: "Ghar ke bijli ke meter jaisa—jitna fan aur AC chalaoge sirf utna hi bill aayega."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLOUD_MODULES_HINGLISH;
}
