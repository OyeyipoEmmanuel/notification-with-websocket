
const names: string[] = [
  "Harry Wilson", "Olivia Martinez", "Ethan Brown", "Sophia Lee",
  "Liam Smith", "Emma Johnson", "Noah Davis", "Ava Martinez",
  "James Wilson", "Isabella Moore", "Lucas Taylor", "Mia Anderson",
  "Daniel Thomas", "Charlotte White", "Benjamin Harris", "Amelia Clark"
];

const messages:string[] = [
  "Just shipped a new feature! Real-time notifications are now live 🚀",
  "WebSockets make apps feel alive 🔔",
  "Nothing beats clean UI and predictable state",
  "Finally handled reconnect logic properly today",
  "Frontend engineering is more than just components",
  "Optimistic UI done right feels magical ✨",
  "State bugs are gone — for now 😅",
  "Performance matters more than people think",
  "Built this with scalability in mind",
  "Shipping small but meaningful improvements today"
];

const times: string[] = ["5m", "10m", "21m", "45m", "1h", "2h", "4h", "1d"];

export const dummyTweets = Array.from({ length: 200 }, (_, i) => {
  const name = names[i % names.length];
  const baseUsername = name.toLowerCase().replace(" ", "");
  const username = `${baseUsername}${i}`;

  return {
    id: String(i + 1),

    profileImg: `https://api.dicebear.com/7.x/shapes/svg?seed=${username}`,

    profileName: name,
    username,
    liked: false,

    time: times[i % times.length],

    tweetMsg: messages[i % messages.length],

    likes: Math.floor(Math.random() * 100)
  };
});
