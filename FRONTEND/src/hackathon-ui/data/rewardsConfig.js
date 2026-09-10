/**
 * rewardsConfig.js
 * BUILDX — Prize Pool, Podiums & Category Bounties Configuration
 * No hardcoded prizes in JSX.
 */
export const rewardsConfig = {
  tag: "06 // THE REWARDS",
  title: "EQUIPMENT, BOUNTIES & PRIZES",
  subtitle:
    "Exceptional engineering earns serious recognition. Compete for major cash pools, cloud credits, and accelerator interviews.",
  totalPrizePool: "₹2,50,000+",

  podium: [
    {
      place: "01",
      tier: "FIRST PLACE // NATIONAL CHAMPION",
      amount: "₹1,00,000",
      description:
        "Direct cash bounty, Champion trophy, fast-track interview with top tech partners, cloud credits, and verified winner certificates.",
      perks: [
        "₹1,00,000 Cash Grant",
        "Direct Fast-Track Interviews",
        "$5,000 Cloud Platform Credits",
        "Exclusive Champion Physical Shield",
      ],
      highlight: true,
    },
    {
      place: "02",
      tier: "SECOND PLACE // RUNNER UP",
      amount: "₹60,000",
      description:
        "Cash bounty, runner-up memento, cloud credits, mentorship access, and national finalist credentials.",
      perks: [
        "₹60,000 Cash Grant",
        "Mentorship with Engineering VPs",
        "$2,500 Cloud Credits",
        "Finalist Physical Memento",
      ],
      highlight: false,
    },
    {
      place: "03",
      tier: "THIRD PLACE // SECOND RUNNER UP",
      amount: "₹40,000",
      description:
        "Cash bounty, third-place memento, API infrastructure allowances, and developer swag.",
      perks: [
        "₹40,000 Cash Grant",
        "DevKit & Swag Vault",
        "$1,000 Cloud Credits",
        "Verified Distinction Certificate",
      ],
      highlight: false,
    },
  ],

  categoryBounties: [
    {
      title: "BEST AI / AGENT ARCHITECTURE",
      amount: "₹20,000",
      sponsor: "AI RESEARCH LABS",
    },
    {
      title: "BEST SECURITY & DEFENSE BUILD",
      amount: "₹15,000",
      sponsor: "CYBER DEFENSE CO",
    },
    {
      title: "MOST INNOVATIVE UI/UX DESIGN",
      amount: "₹15,000",
      sponsor: "CREATIVE ENGINEERING FOUNDRY",
    },
  ],
};
