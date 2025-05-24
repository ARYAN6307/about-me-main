"use client";

import { Column, Heading, Flex, Text, Grid } from "@/once-ui/components"; // Added Grid
import { ProjectCard } from "@/components"; // Assuming ProjectCard is in "@/components"

// Define your life experiences data here
const lifeExperiencesData = [
  {
    slug: "movies-experiences",
    href: "experiences/movies",
    images: [
      {
        src: "/images/experiences/movies/movie1.png",
        title: "Blockbuster Evening at the Multiplex",
        description: "Immersive sound and huge screens for unforgettable action-packed nights.",
        content: "From thrilling action sequences to heartwarming dramas, cinema offers an escape. These evenings were about more than just films; they were about shared gasps, laughter, and post-movie discussions with friends.",
      },
      {
        src: "/images/experiences/movies/movie2.png",
        title: "Cozy Classic Cinema Marathon",
        description: "Weekends dedicated to timeless stories and shared family laughter.",
        content: "There's a special joy in revisiting cinematic masterpieces. Our family marathons were filled with popcorn, blankets, and rediscovering the magic of storytelling across generations. Each film was a journey back in time.",
      },
      {
        src: "/images/experiences/movies/movie3.png",
        title: "Magical Outdoor Movie Nights",
        description: "Unique atmosphere under the stars, perfect for relaxed communal viewing.",
        content: "The open air, the gentle breeze, and a large screen transform a simple movie into a community event. These nights blended relaxation with excitement, creating memorable evenings under the vast sky.",
      },
      {
        src: "/images/experiences/movies/movie4.png", // Example of adding more images
        title: "Exploring Independent Films",
        description: "Venturing into niche cinemas for thought-provoking and artistic works.",
        content: "Beyond the mainstream, discovering independent cinema opened my eyes to diverse narratives and experimental storytelling. These films often sparked deeper conversations and broadened my perspective.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "family-restaurant-experiences",
    href: "experiences/restaurants",
    images: [
      {
        src: "/images/experiences/restaurants/restaurant1.png",
        title: "Vibrant Flavors at 'The Spice Route'",
        description: "Celebrating milestones with authentic Indian cuisine and a warm, inviting ambiance.",
        content: "Our go-to for family celebrations, 'The Spice Route' never disappoints. The aromatic curries and tandoori delights, combined with the restaurant's elegant decor, made every visit feel like a special occasion.",
      },
      {
        src: "/images/experiences/restaurants/restaurant2.png",
        title: "Sunday Brunch Discoveries",
        description: "Uncovering charming cafes with delectable menus and a relaxed vibe.",
        content: "Sunday mornings were made for lazy brunches. Exploring new spots meant finding hidden gems with the perfect balance of comfort food, artisanal coffee, and a cozy atmosphere that encouraged long conversations.",
      },
      {
        src: "/images/experiences/restaurants/restaurant3.png",
        title: "Adventurous Experimental Cuisine",
        description: "Diving into unique fusion dishes and artistic culinary presentations.",
        content: "Pushing culinary boundaries is always exciting. Dining at restaurants that dared to blend different cuisines or present dishes as art opened up a world of new tastes and textures. It was a true feast for the senses.",
      },
       {
        src: "/images/experiences/restaurants/restaurant4.png", // Example of adding more images
        title: "Local Eatery Gems",
        description: "Finding comfort in neighborhood joints serving heartwarming traditional dishes.",
        content: "Sometimes, the best experiences are found closest to home. These local eateries, with their unassuming charm and authentic flavors, became cherished spots for quick, satisfying meals and friendly faces.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "fun-experiences",
    href: "experiences/fun",
    images: [
      {
        src: "/images/experiences/fun/trip1.png",
        title: "Invigorating Mountain Treks",
        description: "Adventures filled with challenging hikes, serene nature, and panoramic views.",
        content: "Escaping to the mountains offered a profound sense of peace and exhilaration. Each trail brought new discoveries, from hidden waterfalls to breathtaking vistas, reminding me of nature's grandeur.",
      },
      {
        src: "/images/experiences/fun/event1.png",
        title: "Electric Music Festival Moments",
        description: "Immersing in live music, vibrant crowds, and an unforgettable atmosphere.",
        content: "The energy of a music festival is unmatched. Dancing to favorite bands, discovering new artists, and sharing joyous moments with friends created lasting memories of pure, unadulterated fun.",
      },
      {
        src: "/images/experiences/fun/hobby1.png",
        title: "Therapeutic Pottery Creations",
        description: "Hands-on artistic expression, molding clay into unique forms.",
        content: "The tactile experience of pottery was incredibly therapeutic. Turning a lump of clay into something beautiful, imperfect as it might be, was a rewarding journey of creativity and patience.",
      },
      {
        src: "/images/experiences/fun/sport1.png", // Example of adding more images
        title: "Thrilling Sports Adventures",
        description: "Engaging in various sports, from cycling trails to friendly badminton matches.",
        content: "Staying active through sports has always been a source of joy. Whether it's the thrill of a long cycle ride through scenic routes or the competitive spirit of a badminton game, these moments keep me energized.",
      },
    ],
    avatars: [],
    link: "",
  },
];

export default function LifeExperiences() {
  return (
    <Column
      fillWidth
      gap="xl"
      marginBottom="40"
      paddingX="l"
      // SUGGESTION: Adjust maxWidth here if you want the content to be wider overall.
      // For example, change "s" to "m" or "l", or remove it for full width.
      // Example: maxWidth="l"
    >
      {/* Hero Section for the page */}
      <Column
        fillWidth
        horizontal="center"
        paddingY="xl" // Increased vertical padding for a more spacious look
        className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-neutral-800 dark:to-neutral-950 text-white rounded-xl shadow-lg"
        style={{ borderRadius: '2rem' }} // More pronounced rounded corners
      >
        <Heading as="h1" wrap="balance" variant="display-strong-xl" className="text-center">
          Journey Through My Life's Tapestry
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" className="mt-4 text-center max-w-2xl px-4">
          A curated collection of cherished moments, from cinematic adventures to culinary delights and thrilling personal pursuits.
        </Text>
      </Column>

      {/* Main Content Sections */}
      <Column fillWidth flex={1} gap="xl"> {/* Increased gap between sections */}
        {lifeExperiencesData.map((experience, index) => (
          <Column key={experience.slug} fillWidth gap="xl">
            {/* Section Heading with subtle styling */}
            <Heading as="h2" variant="heading-strong-xl" className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 dark:from-cyan-400 dark:to-fuchsia-500">
              {experience.slug.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Heading>

            {/* Changed to columns="1" to ensure ProjectCard takes full available width */}
            <Grid columns="1" mobileColumns="1" gap="l">
                <ProjectCard
                  href={experience.href}
                  images={experience.images}
                  avatars={experience.avatars}
                  link={experience.link}
                />
            </Grid>
          </Column>
        ))}
      </Column>

      {/* Footer / Call to Action Section */}
      <Flex
        fillWidth
        horizontal="center"
        paddingY="64"
        className="bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-md mt-40"
        direction="column"
        gap="l"
      >
        <Heading as="h3" variant="heading-strong-xl" className="text-center text-neutral-800 dark:text-neutral-100">
          Curious for More?
        </Heading>
        <Text variant="body-default-m" className="text-center max-w-xl text-neutral-600 dark:text-neutral-300 px-4">
          Every experience shapes who we are. Explore more details or connect to share your own memorable moments!
        </Text>
        {/* You can add a button here, e.g., <Button label="Get in Touch" href="/contact" /> */}
      </Flex>
    </Column>
  );
}