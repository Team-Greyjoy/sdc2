import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PriceContainer = styled.p`
  margin-top: 1em;
`;

const Price = styled.span`
  color: ${(props) => (props.sale ? '#90D7FF' : 'inherit')};
  text-decoration: ${(props) => (props.orgsale ? 'line-through' : 'inherit')};
  font-weight: ${(props) => (props.sale ? 'bold' : 'inherit')};
  margin-right: .75em;
  -webkit-text-stroke: ${(props) => (props.sale ? '.5px #32292F' : 'inherit')};
`;

export default function ProductPrice({ productOrginalPrice, productSalePrice }) {
  if (productSalePrice) {
    return (
      <PriceContainer>
        <Price sale>{`$${productSalePrice}`}</Price>
        <Price orgsale>{`$${productOrginalPrice}`}</Price>
      </PriceContainer>
    );
  }
  return (
    <PriceContainer>
      <Price>{`$${productOrginalPrice}`}</Price>
    </PriceContainer>
  );
}

ProductPrice.propTypes = {

};