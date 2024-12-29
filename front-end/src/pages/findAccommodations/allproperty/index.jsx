import React, { useEffect, useState } from "react";
import { ListingCard, Map, SkeletonCard, Spinner } from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import { getAllAccommodation } from "@/apiService.js/accommodation";

const AllProperty = () => {
  const [propertie, setpropertie] = useState([]);
  const [wishListAccommodationIds, setAccommodationIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loctionsDetails, setLocationsDetails] = useState([]);

  const fetchAllAccommodation = async () => {
    setLoading(true);
    const response = await getAllAccommodation();
    setpropertie(response.accommodations);
    setAccommodationIds(response.accommodationIds);
    const locations = response.accommodations?.map((item, index) => ({
      id: index + 1,
      name: item.title,
      description: `${item.description}, located at ${item.address.street}, ${item.address.city}, ${item.address.state}, ${item.address.zipCode}, ${item.address.country}`,
      coordinates: item.location.coordinates,
    }));
    setLocationsDetails(locations);
    setLoading(false);
  };
  useEffect(() => {
    scrollToTop();
    fetchAllAccommodation();
  }, []);
  return loading ? (
    <div className="container mx-auto lg:px-32 px-4 py-8">
      <div className="p-3">
        <SkeletonCard />
      </div>
      <Spinner />
    </div>
  ) : (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 space-y-4 h-screen overflow-y-auto scroll-bar">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">
              Apartments in New York
              <span className="text-sm font-normal text-gray-500 ml-2">
                {propertie.length} results
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            {propertie
              .slice()
              .reverse()
              .map((property) => {
                return (
                  <ListingCard
                    key={property._id}
                    property={property}
                    wishListAccommodationIds={wishListAccommodationIds}
                  />
                );
              })}
          </div>
        </div>
        <div className="lg:w-1/2 rounded-xl">
          <Map locations={loctionsDetails} />
        </div>
      </div>
    </div>
  );
};

export default AllProperty;
