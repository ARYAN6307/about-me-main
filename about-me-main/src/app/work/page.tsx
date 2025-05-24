import { Column, Heading, Flex, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects"; // Import the client component

// Metadata generation runs on the server
export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

// WorkPageProps should define the expected searchParams structure
interface WorkPageProps {
  searchParams: {
    category?: string;
    page?: string;
    search?: string;
  };
}

// Ensure that WorkPageProps follows the correct structure expected by Next.js
const Work = ({ searchParams }: WorkPageProps) => {
  // Extract and parse search parameters for the Projects component
  const category = searchParams.category || 'all'; // Default to 'all' if no category
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const searchTerm = searchParams.search || ''; // Default to empty string

  return (
    <Column
      fillWidth
      gap="xl" // Increased gap between main sections
      marginBottom="40"
      paddingX="l" // Horizontal padding for the entire page content
    >
      {/* Schema Markup for SEO */}
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero Section for the Work Page */}
      <Column
        fillWidth
        horizontal="center"
        paddingY="xl" // Generous vertical padding for a spacious feel
        className="bg-gradient-to-br from-green-500 to-blue-600 dark:from-neutral-800 dark:to-neutral-950 text-white rounded-xl shadow-lg"
        style={{ borderRadius: '2rem' }} // More pronounced rounded corners
      >
        <Heading as="h1" wrap="balance" variant="display-strong-xl" className="text-center">
          My Diverse Portfolio
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" className="mt-4 text-center max-w-2xl px-4">
          Explore a collection of my pastimes, projects, and passions, from competitive games to cherished collections.
        </Text>
      </Column>

      {/* Main Work Projects Section - This renders the client component */}
      <Column fillWidth flex={1} gap="l">
        <Heading as="h2" variant="heading-strong-xl" className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 dark:from-yellow-400 dark:to-orange-500">
          My Hobbies & Collections
        </Heading>
        {/* Pass the search params to the Projects client component */}
        <Projects
          initialCategory={category}
          initialPage={page}
          initialSearchTerm={searchTerm}
        />
      </Column>

      {/* Footer / Call to Action Section - Consistent with LifeExperiences */}
      <Flex
        fillWidth
        horizontal="center"
        paddingY="l"
        className="bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-md mt-40"
        direction="column"
        gap="l"
      >
        <Heading as="h3" variant="heading-strong-xl" className="text-center text-neutral-800 dark:text-neutral-100">
          Dive Deeper into My Interests?
        </Heading>
        <Text variant="body-default-m" className="text-center max-w-xl text-neutral-600 dark:text-neutral-300 px-4">
          Every experience shapes my journey. Connect with me to share your own passions!
        </Text>
      </Flex>
    </Column>
  );
};

export default Work;
