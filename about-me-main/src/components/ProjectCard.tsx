"use client"; // This is a Client Component

import React, { useState } from "react";
import {
  Carousel,
  Column,
  Flex,
  Heading,
  Text,
} from "@/once-ui/components";


interface ProjectCardProps {
  href: string;
  images: {
    src: string;
    title: string;
    description: string;
    content: string;
  }[];
  avatars: { src: string }[];
  link: string;
}


export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images,
  avatars,
  link
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleImageChange = (index: number) => {
    setActiveImageIndex(index);
  };

  const activeImage = images[activeImageIndex];

  return (
    <Column fillWidth gap="l" padding="l" className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md transition-all">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image, index) => ({
          src: image.src,
          alt: image.title,
          key: index,
          onClick: () => handleImageChange(index),
        }))}
        // PASSED PROPS TO CONTROL CAROUSEL
        activeIndex={activeImageIndex}
        onIndexChange={handleImageChange}
      />

      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        <Flex flex={5}>
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {activeImage.title}
          </Heading>
        </Flex>

        <Column flex={7} gap="16">
          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
            {activeImage.description}
          </Text>

          <Flex gap="24" wrap>
            <Text variant="body-default-s">{activeImage.content}</Text>
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
};