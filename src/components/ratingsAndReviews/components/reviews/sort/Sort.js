import React from 'react';
import SortForm from './SortForm';

function Sort(props) {
  return (
    <div className="sort-form">
      {props.totalReviews}
      reviews, sorted by:
      <SortForm
        handleSortChange={props.handleSortChange}
        sort={props.sort}
      />
    </div>
  );
}

export default Sort;
