import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../previewCollection/PreviewCollection";
import { selectCollectionForPreview } from "../../redux/shop/shopSelector";
import "./collectionOverview.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collction-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
