// Simulate user data and challenge validation
const users = [{ username: "test", password: "test" }];
const leaderboard = [
    { username: "PixelWarrior77@", score: 1723 },
    { username: "GhostRiderX9%", score: 2287 },
    { username: "DarkNova23&", score: 3499 },
    { username: "FirestormX1!", score: 2308 },
    { username: "Starbreaker69*", score: 1412 },
    { username: "IronFist23$", score: 2883 },
    { username: "DragonFlare9#", score: 3104 },
    { username: "Frostbite77!", score: 2436 },
    { username: "QuantumEdge32$", score: 2078 },
    { username: "BlazeKnight61@", score: 3702 },
    { username: "NightFury93%", score: 1523 },
    { username: "StormBringer84#", score: 1967 },
    { username: "MoonShifter56$", score: 1380 },
    { username: "DeathScream14!", score: 3641 },
    { username: "CrystalKnight89*", score: 1499 },
    { username: "PhantomWarrior11#", score: 1783 },
    { username: "TurboForce56!", score: 2845 },
    { username: "InfernoX88$", score: 1243 },
    { username: "DarkVanguard23@", score: 1722 },
    { username: "ThunderBolt45%", score: 2768 },
    { username: "SteelHammer12#", score: 3987 },
    { username: "SavageBeast90!", score: 1350 },
    { username: "VenomStrike34$", score: 2893 },
    { username: "IronClash11@", score: 3622 },
    { username: "MysticGhost28%", score: 2598 },
    { username: "BlackoutX7#", score: 3791 },
    { username: "Lightbringer72$", score: 1748 },
    { username: "BloodRage39!", score: 2643 },
    { username: "AlphaWolf56*", score: 2993 },
    { username: "ShadowAssassin99#", score: 2417 },
    { username: "PhantomFury21$", score: 1305 },
    { username: "SkyRider74!", score: 2174 },
    { username: "StormShadow88@", score: 1397 },
    { username: "FrostWarrior33#", score: 2679 },
    { username: "ThunderClash60$", score: 2043 },
    { username: "DragonKnight42!", score: 3795 },
    { username: "VenomousX12*", score: 1987 },
    { username: "Firestorm42$", score: 2731 },
    { username: "ChaosBlade55@", score: 1968 },
    { username: "PhoenixStrike27%", score: 3245 },
    { username: "DarkReaper91#", score: 3983 },
    { username: "SkyFury65$", score: 1534 },
    { username: "InfernoBeast12!", score: 1492 },
    { username: "Nightshade44#", score: 2849 },
    { username: "BloodStorm88$", score: 3287 },
    { username: "IceDragon34@", score: 1765 },
    { username: "ThunderClaw25%", score: 3568 },
    { username: "Starstorm77!", score: 2910 },
    { username: "ShadowFang49$", score: 1846 },
    { username: "RageBlade72@", score: 3197 },
    { username: "FrostKnight56%", score: 1784 },
    { username: "IronReaper19#", score: 3931 },
    { username: "CrystalFury83$", score: 1407 },
    { username: "GhostSlinger11!", score: 1769 },
    { username: "StormRider60@", score: 2041 },
    { username: "BladeRevenge27#", score: 1975 },
    { username: "FireReaper82$", score: 1823 },
    { username: "MysticClash19!", score: 3421 },
    { username: "DarkKnight47@", score: 3946 },
    { username: "WolfStrike33%", score: 3672 },
    { username: "VenomClaw25#", score: 2427 },
    { username: "TurboStorm56$", score: 2114 },
    { username: "PhantomHunter91!", score: 1234 },
    { username: "CrimsonX47@", score: 2587 },
    { username: "DragonFury23#", score: 3102 },
    { username: "IceStorm12$", score: 1739 },
    { username: "BlazeRider75!", score: 1504 },
    { username: "ShadowFury28@", score: 1720 },
    { username: "NightWolf61%", score: 3249 },
    { username: "ThunderFury49#", score: 1532 },
    { username: "InfernoClash30$", score: 2341 },
    { username: "SkyBeast84!", score: 3971 },
    { username: "DarkVengeance56@", score: 1902 },
    { username: "FireHawk14#", score: 2439 },
    { username: "VenomFang72$", score: 2098 },
    { username: "IronStrike91!", score: 3621 },
    { username: "PhantomX34@", score: 2786 },
    { username: "LightningBeast57#", score: 1531 },
    { username: "IceVortex26$", score: 1857 },
    { username: "DeathBlade77!", score: 3759 },
    { username: "ThunderDragon19@", score: 1549 },
    { username: "MysticStorm92#", score: 3420 },
    { username: "PhoenixClaw33$", score: 2203 },
    { username: "BladeFury48!", score: 1370 },
    { username: "StormFang63@", score: 2986 },
    { username: "BlackKnight50#", score: 2847 },
    { username: "Firestorm22$", score: 2654 },
    { username: "RageWarrior70!", score: 1645 },
    { username: "DarkThunder57@", score: 2934 },
    { username: "CrystalStrike32#", score: 3041 },
    { username: "SteelDragon44$", score: 2183 },
    { username: "ShadowFlame79!", score: 2778 },
    { username: "GhostRage21@", score: 1812 },
    { username: "NightStrike60#", score: 1929 },
    { username: "ThunderRider55$", score: 3287 },
    { username: "BlazeFury18!", score: 2678 },
    { username: "IceClash91@", score: 1795 },
    { username: "StormBlade91!", score: 2143 },
    { username: "NightFury52$", score: 3401 },
    { username: "Thunderstrike24@", score: 3098 },
    { username: "BlazeClash66#", score: 2419 },
    { username: "ShadowViper13$", score: 2654 },
    { username: "FrostKnight48!", score: 2076 },
    { username: "DragonSlayer37@", score: 3617 },
    { username: "IronFury22#", score: 1945 },
    { username: "PhantomStrike57$", score: 2256 },
    { username: "DeathKnight83!", score: 1528 },
    { username: "VenomBlade92@", score: 2803 },
  ];
  

// Login Form Logic
document.getElementById("login-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert("Login Successful!");
        window.location.href = "challenge.html";
    } else {
        alert("Invalid credentials. Try again.");
    }
});

// Challenge Form Logic
document.getElementById("challenge-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const challengeId = document.getElementById("challenge-id").value;
    const flag = document.getElementById("flag").value;

    if (challengeId === "123" && flag === "CTF{example_flag}") {
        alert("Correct flag!");
        leaderboard.push({ username: "admin", score: leaderboard[0].score + 50 });
        window.location.href = "leaderboard.html";
    } else {
        alert("Incorrect flag. Try again.");
    }
});

// Populate Leaderboard
document.addEventListener("DOMContentLoaded", function () {
    const leaderboardTable = document.getElementById("leaderboard")?.querySelector("tbody");
    if (leaderboardTable) {
        leaderboardTable.innerHTML = leaderboard
            .sort((a, b) => b.score - a.score)
            .map((entry, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${entry.username}</td>
                    <td>${entry.score}</td>
                </tr>
            `).join("");
    }
});
