import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./collection.scss";
import CollectionItem from "../../components/collectionItem/CollectionItem";
import { selectCollection } from "../../redux/shop/shopSelector";

const CollectionPage = ({ collection }) => {
  console.log("=====>params", collection);

  return <div className="collection-page">HI THERE</div>;
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
