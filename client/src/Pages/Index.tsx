import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import Hero from "../Components/Hero";

import bg from "../Assets/bg_hero.svg";
import women from "../Assets/woman_hero.png";
import HeroSkeleton from "../Components/Skeleton/HeroSkeleton";
import Heading from "../Components/Heading";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Container>
        {/* Hero */}
        <header>
          {loading ? (
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
          <Heading title="Popular right now"/>
        </section>
      </Container>
    </div>
  );
};

export default Index;
