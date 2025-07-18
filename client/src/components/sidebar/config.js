function createConfig() {
  return {
    links: [
      {
        name: "leaderboard",
        url: "/leaderboard",
      },
      {
        name: "history",
        url: "/history",
      },
      {
        name: "users",
        url: "/users",
      },
    ],
    organization: {
      name: "Leaderboard",
    },
  };
}

export const config = createConfig();
