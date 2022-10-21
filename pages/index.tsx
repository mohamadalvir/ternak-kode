import { Box, Heading, Container, Wrap, WrapItem } from "@chakra-ui/react";
import type { NextPage } from "next";

import { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import { Icon } from "ts-react-feather-icons";
import Head from "next/head";

const type = [
  {
    name: "youtube",
    icon: "youtube",
    color: "red",
  },
  {
    name: "website",
    icon: "globe",
    color: "blue",
  },
];

const Home: NextPage = () => {
  const [data, setData] = useState([
    {
      title: "Sololearn",
      type: "website",
      link: "https://www.sololearn.com",
      categories: ["fullstack-web"],
      tags: ["python", "javascript", "php", "java", "c++", "c#", "html", "css"],
    },
    {
      title: "Web Programming UNPAS",
      type: "youtube",
      link: "https://www.youtube.com/c/WebProgrammingUNPAS",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript", "php", "codeigniter", "laravel"],
    },
    {
      title: "Programmer Zaman Now",
      type: "youtube",
      link: "https://www.youtube.com/c/ProgrammerZamanNow",
      categories: ["fullstack-web"],
      tags: [
        "golang",
        "java",
        "javascript",
        "php",
        "android",
        "kotlin",
        "nodejs",
        "dart",
        "docker",
        "laravel",
      ],
    },
    {
      title: "Parsinta",
      type: "youtube",
      link: "https://www.youtube.com/c/Parsinta",
      categories: ["fullstack-web"],
      tags: [
        "laravel",
        "react.js",
        "vue.js",
        "php",
        "html",
        "css",
        "javascript",
      ],
    },
    {
      title: "Dicoding",
      type: "website",
      link: "https://www.dicoding.com",
      categories: ["fullstack-web"],
      tags: [
        "android",
        "java",
        "kotlin",
        "flutter",
        "react.js",
        "vue.js",
        "laravel",
      ],
    },
    {
      title: "Erico Darmawan Handoyo",
      type: "youtube",
      link: "https://www.youtube.com/c/EricoDarmawanHandoyo",
      categories: ["fullstack-web"],
      tags: ["dart", "flutter", "android", "kotlin"],
    },
    {
      title: "Sekolah Koding",
      type: "website",
      link: "https://www.sekolahkoding.com",
      categories: ["fullstack-web"],
      tags: [
        "laravel",
        "react.js",
        "vue.js",
        "php",
        "html",
        "css",
        "javascript",
      ],
    },
    {
      title: "Prawito Hudoro",
      type: "youtube",
      link: "https://www.youtube.com/channel/UC4k3OBYU4q6MuspHVzZlkew",
      categories: ["fullstack-web"],
      tags: ["javascript", "react native", "react.js"],
    },
    {
      title: "Array id",
      type: "youtube",
      link: "https://www.youtube.com/channel/UCQzfClEEDfuVuES-GQUy6aw?app=desktop",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript", "react.js"],
    },
    {
      title: "BuildWith Angga",
      type: "website",
      link: "https://buildwithangga.com/",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript", "react.js", "laravel"],
    },
    {
      title: "Other Level",
      type: "youtube",
      link: "https://www.youtube.com/c/OtherLevel%E2%80%99s/featured",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript"],
    },
    {
      title: "Egator Tutorial",
      type: "youtube",
      link: "https://www.youtube.com/c/EGATORTUTORIALS/videos",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript", "react.js"],
    },
  ]);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return (
    <>
      <Head>
        <title>Ternak Kode - Belajar ngoding terus, biar jago ngode</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <PageContainer>
        <Container>
          <Heading size="xl" my="10" textAlign="center">
            Resources belajar coding
          </Heading>
          {data.map((item, index) => {
            const iconName: any = type.find(
              (element) => element.name === item.type
            )?.icon;
            return (
              <Box
                key={index}
                boxShadow="md"
                py="6"
                px="4"
                bg="whiteAlpha.200"
                borderWidth={1}
                borderColor="whiteAlpha.300"
                mb="4"
                borderRadius="4"
                as="a"
                target="_blank"
                rel="noreferrer"
                href={item.link}
                display="flex"
                _hover={{
                  bg: "whiteAlpha.300",
                }}
              >
                <Box width="16">
                  <Box
                    mr="4"
                    bg={`${
                      type.find((element) => element.name === item.type)?.color
                    }.500`}
                    color="white"
                    height="10"
                    width="10"
                    display="flex"
                    alignItems="center"
                    borderRadius="full"
                  >
                    <Box mx="auto">
                      <Icon name={iconName} />
                    </Box>
                  </Box>
                </Box>
                <Box flex="1">
                  <Heading size="md" marginBottom="4">
                    {item.title}
                  </Heading>
                  <Wrap spacing="2">
                    {item.tags.map((tag, index) => (
                      <WrapItem
                        key={index}
                        bg="whiteAlpha.400"
                        px="3"
                        py="0"
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight={600}
                        lineHeight="1.5"
                        pb="0.4"
                      >
                        {tag}
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>
              </Box>
            );
          })}
        </Container>
      </PageContainer>
    </>
  );
};

export default Home;
