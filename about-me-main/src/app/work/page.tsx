// src/app/work/page.tsx
import { Column, Heading, Flex, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects"; // Client component

// ✅ Corrected prop type for server component pages
interface WorkPageProps {
  searchParams: { // Make searchParams required
    category?: string;
    page?: string;
    search?: string;
    // Add an index signature if you expect other arbitrary search params
    // [key: string]: string | string[] | undefined;
  };
}

// ✅ Metadata generation runs on the server
export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

// ✅ Server component with proper query param handling
const Work = ({ searchParams }: WorkPageProps) => {
  const category = searchParams.category ?? "all"; // Use .category directly
  const page = parseInt(searchParams.page ?? "1", 10); // Use .page directly
  const search = searchParams.search ?? ""; // Use .search directly

  return (
    <Column
      fillWidth
      gap="xl"
      marginBottom="40"
      paddingX="l"
    >
      {/* SEO Schema */}
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

      {/* Hero Section */}
      <Column
        fillWidth
        horizontal="center"
        paddingY="xl"
        className="bg-gradient-to-br from-green-500 to-blue-600 dark:from-neutral-800 dark:to-neutral-950 text-white rounded-xl shadow-lg"
        style={{ borderRadius: '2rem' }}
      >
        <Heading as="h1" wrap="balance" variant="display-strong-xl" className="text-center">
          My Diverse Portfolio
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" className="mt-4 text-center max-w-2xl px-4">
          Explore a collection of my pastimes, projects, and passions, from competitive games to cherished collections.
        </Text>
      </Column>

      {/* Projects Section */}
      <Column fillWidth flex={1} gap="l">
        <Heading
          as="h2"
          variant="heading-strong-xl"
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 dark:from-yellow-400 dark:to-orange-500"
        >
          My Hobbies & Collections
        </Heading>
        <Projects
          initialCategory={category}
          initialPage={page}
          initialSearchTerm={search}
        />
      </Column>

      {/* Call to Action Section */}
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