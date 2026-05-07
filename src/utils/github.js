const GITHUB_USERNAME = 'RicardoXu2001';

export const fetchGithubRepos = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
    if (!response.ok) throw new Error('Failed to fetch repos');
    return await response.json();
  } catch (error) {
    console.error('Error fetching repos:', error);
    // Fallback data based on user's resume
    return [
      {
        id: 1,
        name: 'Primeval-Heresy',
        description: 'Cthulhu-themed Roguelike Card Game. Built with AI-assisted architecture (Claude/Gemini), featuring a complex 21-point card logic and Meta-narrative system.',
        language: 'JavaScript',
        stargazers_count: 12,
        html_url: 'https://github.com/RicardoXu2001/Primeval-Heresy'
      },
      {
        id: 2,
        name: 'FlavorHub',
        description: 'Full-stack Gourmet Community Platform. Node.js/Express/MongoDB. Implemented Pair Programming with AI, reducing dev cycle by 50%.',
        language: 'JavaScript',
        stargazers_count: 8,
        html_url: 'https://github.com/RicardoXu2001/FlavorHub'
      },
      {
        id: 3,
        name: 'Wheat-Harvest-Bakery',
        description: 'Full-stack E-commerce System. Built with Vanilla JS & Node.js. Features RBAC permission control and a robust shopping cart engine.',
        language: 'JavaScript',
        stargazers_count: 5,
        html_url: 'https://github.com/RicardoXu2001/Wheat-Harvest-Bakery'
      },
      {
        id: 4,
        name: 'qgroundcontrol-fork',
        description: 'UAV Ground Control Station optimization. Focused on C++/Qt core logic and simulation stability improvements.',
        language: 'C++',
        stargazers_count: 3,
        html_url: 'https://github.com/RicardoXu2001/qgroundcontrol'
      }
    ];
  }
};
