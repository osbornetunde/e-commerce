import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./collection.scss";
import CollectionItem from "../../components/collectionItem/CollectionItem";
import { selectCollection } from "../../redux/shop/shopSelector";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
