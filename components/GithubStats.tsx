import { GithubStatsClient } from "./GithubStatsClient";

const USERNAME = "spsneh07";

async function getGithubData() {
  const headers: HeadersInit = {};
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, {
        headers,
        next: { revalidate: 3600 }
      }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
        headers,
        next: { revalidate: 3600 }
      })
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();

    if (!Array.isArray(repos)) {
      return { user, repos: [] };
    }

    return { user, repos };
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error);
    return { user: null, repos: [] };
  }
}

export async function GithubStats() {
  const data = await getGithubData();
  return <GithubStatsClient data={data} />;
}


