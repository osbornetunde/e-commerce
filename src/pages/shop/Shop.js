import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverviewContainer from "../../components/collectionOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../collection/CollectionContainer";
import { fetchCollectionsStart } from "../../redux/shop/shopActions";

const Shop = ({ fetchCollectionsStart }) => {
  const { path } = useRouteMatch();

  useEffect(() => {
    fetchCollectionsStart();
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${path}`}>
        <CollectionOverviewContainer otherProps="props" />
      </Route>
      <Route path={`${path}/:collectionId`}>
        <CollectionPageContainer otherProps="props" />
      </Route>
    </div>
  );
};

export default connect(null, { fetchCollectionsStart })(Shop);
