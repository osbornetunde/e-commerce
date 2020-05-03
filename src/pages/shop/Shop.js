import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionOverview from "./../../components/collectionOverview/CollectionOverview";
import CollectionPage from "../collection/Collection";

const Shop = () => {
  const { path } = useRouteMatch();

  return (
    <div className="shop-page">
      <Route exact path={`${path}`}>
        <CollectionOverview />
      </Route>
      <Route path={`${path}/:collectionId`}>
        <CollectionPage />
      </Route>
    </div>
  );
};

export default Shop;
