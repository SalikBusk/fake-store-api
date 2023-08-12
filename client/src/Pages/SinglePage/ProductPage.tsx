import React from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import Container from "../../Components/Container";
import ProductGallery from "../../Components/Listings/ProductGallery";
import { ProductHead, ProductHeadSkeleton } from "../../Components/Listings/ProductHead";
import { useFetch } from "../../Hooks/useFetch";

const ProductPage = () => {
  const { id } = useParams();

  const url = `https://fakestoreapi.com/products/${id}`;
  const { loading, error, apiData } = useFetch(url);

  // Define skeleton data for consistent structure
  const skeletonData = {
    category: "Category",
    title: "Product Title",
    description: "Product Description",
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Container>
        <section className="grid grid-cols-2 py-[20px] gap-[10px]">
          {loading ? (
            <div>
              <Skeleton width={`100%`} height={`70vh`} />
            </div>
          ) : (
            <ProductGallery image={apiData.image} title={apiData.title} />
          )}
          <div>
            {loading ? (
              <ProductHeadSkeleton />
            ) : (
              <ProductHead
                category={apiData.category || skeletonData.category}
                title={apiData.title || skeletonData.title}
                description={apiData.description || skeletonData.description}
              />
            )}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ProductPage;
