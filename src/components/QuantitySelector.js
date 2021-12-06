import {
  QuantityButton,
  QuantityInput,
  QtySelectorContent,
} from './QuantitySelector.styles';
const QuantitySelector = ({
  increaseHandler,
  reduceHandler,
  quantity,
  maxQuantity,
  minQuantity,
}) => {
  return (
    <>
      <QtySelectorContent>
        <QuantityButton
          onClick={() => {
            quantity > minQuantity && reduceHandler();
          }}
        >
          {`-`}
        </QuantityButton>
        <QuantityInput readOnly value={quantity} />
        <QuantityButton
          onClick={() => {
            quantity < maxQuantity && increaseHandler();
          }}
        >
          {'+'}
        </QuantityButton>
      </QtySelectorContent>
    </>
  );
};

export default QuantitySelector;
