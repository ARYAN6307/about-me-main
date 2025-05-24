'use client';
import { Column, Grid, Heading, Flex, Text } from "@/once-ui/components";
import { ProjectCard } from "@/components";
import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Project data is validated: all items include slug, category, type, images, etc.
const projectsData = [
  {
    slug: "outdoor-games",
    category: "Games",
    type: "Outdoor",
    href: "work/outdoor-games",
    images: [
      {
        src: "/images/games/outdoor/cricket.png",
        title: "Cricket",
        description: "Played with friends at Sahara Stadium and park, including senior and junior boys.",
        content: "A popular team sport where I bonded with friends and neighbors through evening matches.",
      },
      {
        src: "/images/games/outdoor/football.png",
        title: "Football",
        description: "Played in the evening under floodlights at Sahara Stadium and park.",
        content: "Intense, fast-paced game that boosted teamwork and stamina.",
      },
      {
        src: "/images/games/outdoor/basketball.png",
        title: "Basketball",
        description: "Played in school during games period.",
        content: "Enjoyed playing despite injuring my finger once. Competitive and thrilling.",
      },
      {
        src: "/images/games/outdoor/badminton.png",
        title: "Badminton",
        description: "Played near Sahara Park after passing 12th in 2021.",
        content: "Quick reflex sport that became a great post-school hobby.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "indoor-games",
    category: "Games",
    type: "Indoor",
    href: "work/indoor-games",
    images: [
      {
        src: "/images/games/indoor/chess.png",
        title: "Chess",
        description: "Played with friends in school and at Sahara States.",
        content: "Strategic board game that taught patience and foresight.",
      },
      {
        src: "/images/games/indoor/ludo.png",
        title: "Ludo",
        description: "Played with friends during breaks in school.",
        content: "Fun dice-based board game that brought lots of laughter.",
      },
      {
        src: "/images/games/indoor/carrom.png",
        title: "Carrom",
        description: "Played at Sahara States community center.",
        content: "Aiming and flicking coins with precision was satisfying.",
      },
      {
        src: "/images/games/indoor/uno.png",
        title: "UNO",
        description: "Played with PG roommates during B.Tech at SRM.",
        content: "Card game full of reversals, skips, and wild cards—always unpredictable.",
      },
      {
        src: "/images/games/indoor/rajamantri.png",
        title: "Rajamantri Chor Sipahi",
        description: "Played with PG roommates during B.Tech at SRM.",
        content: "A fun social deduction game involving roles and quick guesses.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "online-games",
    category: "Games",
    type: "Online",
    href: "work/online-games",
    images: [
      {
        src: "/images/games/online/freefire.png",
        title: "Free Fire",
        description: "Played since 2019, still actively playing.",
        content: "Battle royale with fast-paced action and strategic gunfights.",
      },
      {
        src: "/images/games/online/pokemon.png",
        title: "Pokemon Games",
        description: "Played FireRed, DarkGrey, Hey Monster, Pocketown, Pokeland Legends, and Go.",
        content: "Adventure-filled creature collecting and turn-based battles.",
      },
      {
        src: "/images/games/online/cod.png",
        title: "Call of Duty (COD)",
        description: "Played free-for-all rounds with friends.",
        content: "High-octane shooter with impressive graphics and team strategy.",
      },
      {
        src: "/images/games/online/amongus.png",
        title: "Among Us / Suspects",
        description: "Played with friends in 2021 after school.",
        content: "Hilarious deception game with impostors and crewmates.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "card-collections",
    category: "Collections",
    type: "Cards",
    href: "work/card-collections",
    images: [
      {
        src: "/images/games/cards/pokemon.png",
        title: "Pokemon Cards",
        description: "Collected a pack worth ₹1000 in 9th class.",
        content: "Traded with friends and built a powerful collection.",
      },
      {
        src: "/images/games/cards/world.png",
        title: "Wonders of the World Cards",
        description: "Top Trumps cards played with neighborhood friends.",
        content: "Fun educational card game about famous landmarks.",
      },
      {
        src: "/images/games/cards/animals.png",
        title: "Animals Cards",
        description: "Top Trumps cards played with neighborhood friends.",
        content: "Enjoyed comparing animal stats and playing competitively.",
      },
      {
        src: "/images/games/cards/places.png",
        title: "Places Cards",
        description: "Cards about famous global places.",
        content: "Boosted general knowledge and was fun to collect.",
      },
      {
        src: "/images/games/cards/angrybirds.png",
        title: "Angry Birds Cards",
        description: "Collected from Kurkure Puffcorn packs.",
        content: "Tiny character cards, a fun addition from snacks.",
      },
      {
        src: "/images/games/cards/pokemonevo.png",
        title: "Pokemon Evolution Cards",
        description: "Collected from Chocos packs.",
        content: "Evolved forms of favorite Pokémon. Loved them!",
      },
      {
        src: "/images/games/cards/avengers.png",
        title: "Avengers Cards",
        description: "Top Trumps cards with Marvel characters.",
        content: "Battle-style card game that was exciting to play.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "sticker-collections",
    category: "Collections",
    type: "Stickers",
    href: "work/sticker-collections",
    images: [
      {
        src: "/images/games/cards/pokemon.png",
        title: "Tazos & Stickers",
        description: "Collected from Lays/Cheetos & other snacks.",
        content: "Childhood passion of collecting and trading. Especially loved Tazos.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "stamp-collections",
    category: "Collections",
    type: "Stamps",
    href: "work/stamp-collections",
    images: [
      {
        src: "/images/games/cards/pokemon.png",
        title: "Stamp Collection",
        description: "Collected various commemorative stamps.",
        content: "Explored history and countries through stamps.",
      },
    ],
    avatars: [],
    link: "",
  },
];

interface ProjectsProps {
  initialCategory: string;
  initialPage: number;
  initialSearchTerm: string;
}

export function Projects({ initialCategory, initialPage, initialSearchTerm }: ProjectsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [searchInput, setSearchInput] = useState(initialSearchTerm || "");  // Ensuring default value

  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "all");
    setCurrentPage(parseInt(searchParams.get("page") || "1", 10));
    setSearchTerm(searchParams.get("search") || "");
    setSearchInput(searchParams.get("search") || "");  // Ensuring default value
  }, [searchParams]);

  const filteredAndPaginatedProjects = useMemo(() => {
    let temp = [...projectsData];

    if (activeCategory !== "all") {
      temp = temp.filter(p => p.category === activeCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      temp = temp.filter(
        (p) =>
          p.slug.toLowerCase().includes(term) ||
          p.type.toLowerCase().includes(term) ||
          p.images.some(
            (img) =>
              img.title.toLowerCase().includes(term) ||
              img.description.toLowerCase().includes(term) ||
              img.content.toLowerCase().includes(term)
          )
      );
    }

    const projectsPerPage = 4;
    const paginated = temp.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);

    return {
      projects: paginated,
      totalPages: Math.ceil(temp.length / projectsPerPage),
    };
  }, [activeCategory, currentPage, searchTerm]);

  const allCategories = useMemo(() => {
    const unique = new Set(projectsData.map((p) => p.category));
    return ["All", ...Array.from(unique)];
  }, []);

  const updateUrl = ({ category, page, search }: { category: string; page: number; search: string }) => {
    const params = new URLSearchParams();
    if (category !== "all") params.set("category", category);
    if (page !== 1) params.set("page", String(page));
    if (search) params.set("search", search);
    router.push(`/?${params.toString()}`);
  };

  return (
    <section>
      <Heading as="h2">Explore Projects</Heading>
      <Flex>
        <select
          value={activeCategory}
          onChange={(e) => {
            setActiveCategory(e.target.value);
            setCurrentPage(1);
            updateUrl({ category: e.target.value, page: 1, search: searchInput });
          }}
        >
          {allCategories.map((category) => (
            <option key={category} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search projects"
        />
        <button
          onClick={() => {
            setSearchTerm(searchInput);
            setCurrentPage(1);
            updateUrl({ category: activeCategory, page: 1, search: searchInput });
          }}
        >
          Search
        </button>
      </Flex>
      <Grid>
        {filteredAndPaginatedProjects.projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </Grid>
      <Flex style={{ justifyContent: "center" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            updateUrl({ category: activeCategory, page: currentPage - 1, search: searchInput });
          }}
        >
          Previous
        </button>
        <button
          disabled={currentPage === filteredAndPaginatedProjects.totalPages}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            updateUrl({ category: activeCategory, page: currentPage + 1, search: searchInput });
          }}
        >
          Next
        </button>
      </Flex>
    </section>
  );
}