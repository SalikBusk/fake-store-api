import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import Hero from "../Components/Hero";

import bg from "../Assets/bg_hero.svg";
import women from "../Assets/woman_hero.png";
import HeroSkeleton from "../Components/Skeleton/HeroSkeleton";
import Heading from "../Components/Heading";
import { useFetch } from "../Hooks/useFetch";

interface Product {
  id: number;
  title: string;
  image: string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://fakestoreapi.com/products";
  const { loading, error, apiData } = useFetch(url);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <Container>
        {/* Hero */}
        <header>
          {isLoading ? (
            <HeroSkeleton />
          ) : (
            <Hero
              title="Discover Your Perfect Style"
              subtitle="Shop the Latest Trends in Fashion"
              background={bg}
              image={women}
            />
          )}
        </header>

        <section className="py-[50px]">
          <Heading title="Popular right now" />
          <section className="py-[10px] grid grid-cols-4 gap-[10px]">
            {apiData.map((item: Product) => (
              <img
                className="w-full h-[38vh] object-cover border-[1px] border-black"
                src={item.image}
                alt=""
                loading="lazy"
              />
            ))}
          </section>
        </section>
      </Container>
    </div>
  );
};

export default Index;
