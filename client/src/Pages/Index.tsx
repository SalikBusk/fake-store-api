import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import Hero from "../Components/Hero";
import bg from "../Assets/bg_hero.svg";
import women from "../Assets/woman_hero.png";
import HeroSkeleton from "../Components/Skeleton/HeroSkeleton";
import Heading from "../Components/Heading";
import { useFetch } from "../Hooks/useFetch";
import CardSkeleton from "../Components/Skeleton/CardSkeleton";

import ProductCard from "../Components/Listings/ProductCard";

interface Product {
  id: number;
  title: string;
  image: string;
  category: string,
  rate: {
    rate: number,
    count: number,
  }
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
            {loading ? (
              <div>
                <CardSkeleton cards={10} />
              </div>
            ) : (
              <>
                {apiData.map((item: Product) => (
                  <ProductCard
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    category={item.category}
                    rating={item.rate}
                  />
                ))}
              </>
            )}
          </section>
        </section>
      </Container>
    </div>
  );
};

export default Index;
