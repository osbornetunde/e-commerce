import React, { useState } from "react";
import PreviewCollection from "./../../components/previewCollection/PreviewCollection";
import SHOW_DATA from "../../shopData";

const Shop = () => {
  const [collections, setCollections] = useState(SHOW_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
