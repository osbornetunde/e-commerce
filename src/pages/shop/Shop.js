import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collectionOverview/CollectionOverview";
import CollectionPage from "../collection/Collection";
import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";
import WithSpinner from "../../components/withSpinner/WithSpinner";
import { selectIsCollectionFetching } from "../../redux/shop/shopSelector";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({ isCollectionFetching, fetchCollectionsStartAsync }) => {
  const { path } = useRouteMatch();

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${path}`}>
        <CollectionsOverviewWithSpinner
          isLoading={isCollectionFetching}
          otherProps="props"
        />
      </Route>
      <Route path={`${path}/:collectionId`}>
        <CollectionsPageWithSpinner
          isLoading={isCollectionFetching}
          otherProps="props"
        />
      </Route>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

export default connect(mapStateToProps, { fetchCollectionsStartAsync })(Shop);
