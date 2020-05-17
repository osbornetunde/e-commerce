import React, { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collectionOverview/CollectionOverview";
import CollectionPage from "../collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";
import { updateCollections } from "../../redux/shop/shopActions";
import WithSpinner from "../../components/withSpinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({ updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { path } = useRouteMatch();

  const unSubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${path}`}>
        <CollectionsOverviewWithSpinner
          isLoading={isLoading}
          otherProps="props"
        />
      </Route>
      <Route path={`${path}/:collectionId`}>
        <CollectionsPageWithSpinner isLoading={isLoading} otherProps="props" />
      </Route>
    </div>
  );
};

export default connect(null, { updateCollections })(Shop);
