// ======================================
// GAMEFORGE - GAME LIBRARY
// ======================================

// Change game information here whenever you want.
// Image paths must match the filenames in your images folder.

const GAME_CATALOG = [
    {
        id: 1,
        title: "VALORANT",
        image: "valorant.png",
        category: "Tactical Shooter",
        platform: "PC",
        developer: "Riot Games",
        release: "2020",
        rating: 4.5,
        hours: 120,
        status: "Playing",
        objective: "Work with your team to attack or defend objectives using weapons and agents with unique abilities."
    },
    {
        id: 2,
        title: "Counter-Strike 2",
        image: "cs2.jpeg",
        category: "Tactical Shooter",
        platform: "PC",
        developer: "Valve",
        release: "2023",
        rating: 4.7,
        hours: 85,
        status: "Playing",
        objective: "Use teamwork, strategy, and accurate shooting to win round-based matches."
    },
    {
        id: 3,
        title: "League of Legends",
        image: "league.jpg",
        category: "MOBA",
        platform: "PC",
        developer: "Riot Games",
        release: "2009",
        rating: 4.4,
        hours: 210,
        status: "Playing",
        objective: "Choose a champion, work with your team, and destroy the enemy Nexus."
    },
    {
        id: 4,
        title: "Grand Theft Auto V",
        image: "gta.webp",
        category: "Action-Adventure",
        platform: "PC / Console",
        developer: "Rockstar Games",
        release: "2013",
        rating: 4.6,
        hours: 65,
        status: "Playing",
        objective: "Explore Los Santos, complete missions, and follow the stories of three criminals in an open world."
    },
    {
        id: 5,
        title: "Red Dead Redemption 2",
        image: "red.jpg",
        category: "Action-Adventure",
        platform: "PC / Console",
        developer: "Rockstar Games",
        release: "2018",
        rating: 4.9,
        hours: 90,
        status: "Playing",
        objective: "Experience Arthur Morgan's journey through the American frontier, completing missions and exploring the world."
    },
    {
        id: 6,
        title: "Outlast",
        image: "outlast.webp",
        category: "Survival Horror",
        platform: "PC / Console",
        developer: "Red Barrels",
        release: "2013",
        rating: 4.2,
        hours: 12,
        status: "Completed",
        objective: "Investigate a psychiatric hospital, avoid its dangerous residents, and use a night-vision camera to survive."
    },
    {
        id: 7,
        title: "Outlast 2",
        image: "outlast2.png",
        category: "Survival Horror",
        platform: "PC / Console",
        developer: "Red Barrels",
        release: "2017",
        rating: 4.1,
        hours: 14,
        status: "Completed",
        objective: "Search for your missing wife in a remote area while escaping threats and uncovering a disturbing mystery."
    },
    {
        id: 8,
        title: "Genshin Impact",
        image: "genshin.png",
        category: "Action RPG",
        platform: "PC / Mobile / Console",
        developer: "HoYoverse",
        release: "2020",
        rating: 4.5,
        hours: 160,
        status: "Playing",
        objective: "Explore Teyvat, collect characters, use elemental abilities, and uncover the story of the world."
    },
    {
        id: 9,
        title: "The Last of Us Part I",
        image: "last.webp",
        category: "Action-Adventure",
        platform: "PC / PlayStation",
        developer: "Naughty Dog",
        release: "2022",
        rating: 4.8,
        hours: 18,
        status: "Completed",
        objective: "Guide Joel and Ellie across a dangerous post-pandemic world using stealth, combat, and resource management."
    },
    {
        id: 10,
        title: "The Last of Us Part II",
        image: "last2.webp",
        category: "Action-Adventure",
        platform: "PlayStation",
        developer: "Naughty Dog",
        release: "2020",
        rating: 4.7,
        hours: 25,
        status: "Completed",
        objective: "Follow Ellie through a dangerous world shaped by loss and conflict, using stealth and combat to survive."
    },
    {
        id: 11,
        title: "The Walking Dead (Telltale)",
        image: "walking.jpg",
        category: "Story Adventure",
        platform: "PC / Console / Mobile",
        developer: "Telltale Games",
        release: "2012",
        rating: 4.6,
        hours: 20,
        status: "Completed",
        objective: "Make important decisions while Lee protects Clementine and a group of survivors during a zombie outbreak."
    },
    {
        id: 12,
        title: "Apex Legends",
        image: "apex.webp",
        category: "Battle Royale",
        platform: "PC / Console",
        developer: "Respawn Entertainment",
        release: "2019",
        rating: 4.3,
        hours: 75,
        status: "Playing",
        objective: "Choose a Legend, use unique abilities, and cooperate with your squad to be the last team standing."
    },
    {
        id: 13,
        title: "Team Fortress 2",
        image: "fortress.jpg",
        category: "Team Shooter",
        platform: "PC",
        developer: "Valve",
        release: "2007",
        rating: 4.4,
        hours: 55,
        status: "Playing",
        objective: "Choose a character class and work with your team to complete objectives in multiplayer matches."
    },
    {
        id: 14,
        title: "Dota 2",
        image: "dota2.png",
        category: "MOBA",
        platform: "PC",
        developer: "Valve",
        release: "2013",
        rating: 4.5,
        hours: 110,
        status: "Playing",
        objective: "Choose a hero, gain resources, coordinate with teammates, and destroy the opposing team's Ancient."
    },
    {
        id: 15,
        title: "Warframe",
        image: "warframe.png",
        category: "Action RPG",
        platform: "PC / Console",
        developer: "Digital Extremes",
        release: "2013",
        rating: 4.4,
        hours: 70,
        status: "Playing",
        objective: "Control a powerful Warframe, complete missions, collect equipment, and explore a science-fiction universe."
    },
    {
        id: 16,
        title: "PUBG: Battlegrounds",
        image: "pubg.webp",
        category: "Battle Royale",
        platform: "PC / Console",
        developer: "KRAFTON",
        release: "2017",
        rating: 4.2,
        hours: 45,
        status: "Playing",
        objective: "Collect equipment, survive a shrinking battlefield, and outlast other players to win."
    },
    {
        id: 17,
        title: "Aimlab",
        image: "aimlab.webp",
        category: "Aim Trainer",
        platform: "PC",
        developer: "Statespace",
        release: "2018",
        rating: 4.0,
        hours: 30,
        status: "Playing",
        objective: "Improve your aim, tracking, reaction time, and precision through training exercises."
    },
    {
        id: 18,
        title: "The Sims 4",
        image: "sims4.png",
        category: "Life Simulation",
        platform: "PC / Console",
        developer: "Maxis",
        release: "2014",
        rating: 4.1,
        hours: 50,
        status: "Playing",
        objective: "Create characters, build homes, manage relationships, and shape your Sims' lives."
    },
    {
        id: 19,
        title: "Resident Evil 4 Remake",
        image: "resident.webp",
        category: "Survival Horror",
        platform: "PC / Console",
        developer: "Capcom",
        release: "2023",
        rating: 4.7,
        hours: 22,
        status: "Completed",
        objective: "Play as Leon Kennedy on a mission to rescue the president's daughter while fighting infected enemies."
    },
    {
        id: 20,
        title: "Cyberpunk 2077",
        image: "cyber.jpg",
        category: "Open-World RPG",
        platform: "PC / Console",
        developer: "CD Projekt Red",
        release: "2020",
        rating: 4.6,
        hours: 80,
        status: "Playing",
        objective: "Explore Night City as V, complete jobs, upgrade abilities, and shape your story through choices."
    }
];


// ======================================
// SAVED DATA
// ======================================

function loadData(key, fallback) {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : fallback;
    } catch (error) {
        return fallback;
    }
}

function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn("Could not save GameForge data.", error);
    }
}

let favorites = loadData("gameforgeFavorites", []);
let recentGames = loadData("gameforgeRecent", []);
let customStatuses = loadData("gameforgeStatuses", {});

let currentView = "library";
let currentGameId = null;


// ======================================
// GET GAME INFORMATION
// ======================================

function getGame(id) {
    return GAME_CATALOG.find(game => game.id === Number(id));
}

function getStatus(game) {
    return customStatuses[game.id] || game.status;
}


// ======================================
// DISPLAY GAME CARDS
// ======================================

function renderGames() {
    const grid = document.getElementById("gameGrid");
    const query = document.getElementById("searchInput")
        .value.trim().toLowerCase();

    let games = [...GAME_CATALOG];

    // Show only games matching the selected section.
    if (currentView === "favorites") {
        games = games.filter(game => favorites.includes(game.id));
    }

    if (currentView === "recent") {
        games = recentGames
            .map(id => getGame(id))
            .filter(Boolean);
    }

    // Search by title, category, developer, or platform.
    if (query) {
        games = games.filter(game =>
            game.title.toLowerCase().includes(query) ||
            game.category.toLowerCase().includes(query) ||
            game.developer.toLowerCase().includes(query) ||
            game.platform.toLowerCase().includes(query)
        );
    }

    // Sort the games.
    const sort = document.getElementById("sortSelect").value;

    if (sort === "title") {
        games.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "rating") {
        games.sort((a, b) => b.rating - a.rating);
    } else if (sort === "hours") {
        games.sort((a, b) => b.hours - a.hours);
    }

    const viewInfo = {
        library: {
            breadcrumb: "ALL GAMES",
            title: "Your <span>Library.</span>",
            description: "Every adventure starts somewhere. Pick your next game.",
            section: "All Games",
            subtitle: "Your complete collection",
            stat: "GAMES IN LIBRARY"
        },
        favorites: {
            breadcrumb: "FAVORITES",
            title: "Your <span>Favorites.</span>",
            description: "Your favorite games, all in one place.",
            section: "Favorites",
            subtitle: "Games you have marked with a heart",
            stat: "FAVORITES"
        },
        recent: {
            breadcrumb: "RECENTLY PLAYED",
            title: "Back to <span>Gaming.</span>",
            description: "Jump back into a game from your recent activity.",
            section: "Recently Played",
            subtitle: "Games you marked as played",
            stat: "RECENT GAMES"
        }
    };

    const info = viewInfo[currentView];

    document.getElementById("breadcrumb").textContent = info.breadcrumb;
    document.getElementById("pageTitle").innerHTML = info.title;
    document.getElementById("pageDescription").textContent = info.description;
    document.getElementById("sectionTitle").textContent = info.section;
    document.getElementById("sectionDescription").textContent = info.subtitle;
    document.getElementById("visibleCount").textContent = games.length;
    document.querySelector(".library-stat span").textContent = info.stat;

    document.getElementById("gameCount").textContent = GAME_CATALOG.length;
    document.getElementById("favoriteCount").textContent = favorites.length;

    // Build each game card.
    grid.innerHTML = games.map(game => {
        const isFavorite = favorites.includes(game.id);
        const status = getStatus(game);

        return `
            <article class="game-card"
                tabindex="0"
                role="button"
                aria-label="View ${game.title} details"
                onclick="openModal(${game.id})"
                onkeydown="if(event.key === 'Enter' || event.key === ' '){event.preventDefault();openModal(${game.id})}">

                <div class="game-cover image-missing">
                    <img
                        src="./images/${game.image}"
                        alt="${game.title} cover"
                        loading="eager"
                        onload="this.parentElement.classList.remove('image-missing')"
                        onerror="this.parentElement.classList.add('image-missing')">

                    <div class="cover-placeholder">
                        <strong>${game.title}</strong>
                        <small>Add your cover image</small>
                    </div>

                    <div class="card-top">
                        <span class="game-number">
                            ${String(game.id).padStart(2, "0")}
                        </span>

                        <button
                            class="favorite-button ${isFavorite ? "is-favorite" : ""}"
                            onclick="event.stopPropagation();toggleFavorite(${game.id})"
                            aria-label="${isFavorite ? "Remove from favorites" : "Add to favorites"}">
                            ${isFavorite ? "♥" : "♡"}
                        </button>
                    </div>
                </div>

                <div class="game-info">
                    <h3 class="game-title" title="${game.title}">
                        ${game.title}
                    </h3>

                    <div class="game-meta">
                        <span class="game-category">${game.category}</span>
                        <span class="game-rating">★ ${game.rating.toFixed(1)}</span>
                    </div>

                    <div class="card-footer">
                        <span class="status-chip">${status.toUpperCase()}</span>
                        <span>${game.hours} hrs</span>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    const isEmpty = games.length === 0;

    grid.classList.toggle("hidden", isEmpty);
    document.getElementById("emptyState").classList.toggle("hidden", !isEmpty);

    // Highlight the active sidebar button.
    document.querySelectorAll(".nav-item").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.view === currentView
        );
    });
}


// ======================================
// NAVIGATION
// ======================================

function showView(view) {
    currentView = view;

    document.getElementById("searchInput").value = "";
    document.getElementById("sortSelect").value = "default";

    document.getElementById("appLayout").classList.remove("hidden");
    document.getElementById("fullDetails").classList.add("hidden");

    closeModal();
    renderGames();

    document.querySelector(".sidebar").classList.remove("open");
    window.scrollTo(0, 0);
}

function resetLibrary() {
    showView("library");
}

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("open");
}


// ======================================
// FAVORITES
// ======================================

function toggleFavorite(id) {
    id = Number(id);

    if (favorites.includes(id)) {
        favorites = favorites.filter(gameId => gameId !== id);
    } else {
        favorites.push(id);
    }

    saveData("gameforgeFavorites", favorites);

    renderGames();

    // Update the heart inside the open popup.
    if (
        currentGameId === id &&
        !document.getElementById("gameModal").classList.contains("hidden")
    ) {
        updateModalFavorite();
    }

    // Update the heart on the full details page.
    if (
        currentGameId === id &&
        !document.getElementById("fullDetails").classList.contains("hidden")
    ) {
        updateDetailsFavorite();
    }
}

function updateModalFavorite() {
    const button = document.getElementById("modalFavorite");
    const isFavorite = favorites.includes(currentGameId);

    button.textContent = isFavorite ? "♥" : "♡";
    button.classList.toggle("is-favorite", isFavorite);
}


// ======================================
// RECENTLY PLAYED
// ======================================

function markPlayed(id) {
    id = Number(id);

    recentGames = [
        id,
        ...recentGames.filter(gameId => gameId !== id)
    ].slice(0, 20);

    customStatuses[id] = "Playing";

    saveData("gameforgeRecent", recentGames);
    saveData("gameforgeStatuses", customStatuses);

    renderGames();

    const game = getGame(id);

    if (game) {
        fillModal(game);
        fillFullDetails(game);
    }
}


// ======================================
// QUICK-VIEW POPUP
// ======================================

function openModal(id) {
    const game = getGame(id);

    if (!game) return;

    currentGameId = game.id;

    fillModal(game);

    document.getElementById("gameModal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function fillModal(game) {
    document.getElementById("modalTitle").textContent = game.title;

    document.getElementById("modalDeveloper").textContent =
        `${game.developer} · ${game.release}`;

    document.getElementById("modalCategory").textContent =
        game.category.toUpperCase();

    document.getElementById("modalObjective").textContent =
        game.objective;

    document.getElementById("modalPlatform").textContent =
        game.platform;

    document.getElementById("modalRelease").textContent =
        game.release;

    document.getElementById("modalRating").textContent =
        `★ ${game.rating.toFixed(1)} / 5`;

    document.getElementById("modalHours").textContent =
        `${game.hours} hours`;

    document.getElementById("modalStatus").textContent =
        getStatus(game);

    document.getElementById("modalImage").style.backgroundImage =
        `url("./images/${game.image}")`;

    updateModalFavorite();
}

function closeModal() {
    document.getElementById("gameModal").classList.add("hidden");
    document.body.style.overflow = "";
}

function closeModalOnBackdrop(event) {
    if (event.target.id === "gameModal") {
        closeModal();
    }
}


// ======================================
// FULL GAME DETAILS PAGE
// ======================================

function openFullDetails() {
    const game = getGame(currentGameId);

    if (!game) return;

    closeModal();

    document.getElementById("appLayout").classList.add("hidden");
    document.getElementById("fullDetails").classList.remove("hidden");

    fillFullDetails(game);

    window.scrollTo(0, 0);
}

function fillFullDetails(game) {
    document.getElementById("detailsTitle").textContent =
        game.title;

    document.getElementById("detailsSummary").textContent =
        `${game.category} · ${game.platform} · Released ${game.release}`;

    document.getElementById("detailsObjective").textContent =
        game.objective;

    document.getElementById("detailsCategory").textContent =
        game.category;

    document.getElementById("detailsPlatform").textContent =
        game.platform;

    document.getElementById("detailsDeveloper").textContent =
        game.developer;

    document.getElementById("detailsRelease").textContent =
        game.release;

    document.getElementById("detailsRating").textContent =
        `★ ${game.rating.toFixed(1)} / 5`;

    document.getElementById("detailsHours").textContent =
        `${game.hours} hours`;

    document.getElementById("detailsStatus").textContent =
        getStatus(game);

    document.getElementById("detailsHero").style.backgroundImage =
        `url("./images/${game.image}")`;

    updateDetailsFavorite();
}

function updateDetailsFavorite() {
    const button = document.getElementById("detailsFavorite");
    const isFavorite = favorites.includes(currentGameId);

    button.textContent = isFavorite
        ? "♥ In Favorites"
        : "♡ Add to Favorites";
}

function backToLibrary() {
    document.getElementById("fullDetails").classList.add("hidden");
    document.getElementById("appLayout").classList.remove("hidden");

    renderGames();
    window.scrollTo(0, 0);
}


// ======================================
// SEARCH AND SORT
// ======================================

document.getElementById("searchInput").addEventListener("input", renderGames);

document.getElementById("sortSelect").addEventListener("change", renderGames);

// Press Escape to close the popup.
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
        document.querySelector(".sidebar").classList.remove("open");
    }

    // Ctrl + K or Command + K focuses the search box.
    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {
        event.preventDefault();
        document.getElementById("searchInput").focus();
    }
});


// ======================================
// START GAMEFORGE
// ======================================

renderGames();