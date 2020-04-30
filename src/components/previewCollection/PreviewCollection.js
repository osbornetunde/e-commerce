import React from "react";
import "./previewCollection.scss";
import CollectionItem from "./../collectionItem/CollectionItem";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemsProps }) => (
          <CollectionItem key={id} {...otherItemsProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
