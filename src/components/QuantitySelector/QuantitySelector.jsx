import { useEffect, useState } from "react";
import { Button, Controls, Input } from "./QuantitySelector.styled";

export default function QuantitySelector({
  defaultValue = 1,
  minValue = 1,
  maxValue = Infinity,
  onChange = () => {},
}) {
  const [quantity, setQuantity] = useState(defaultValue);

  useEffect(() => {
    onChange(defaultValue);
  }, [onChange, defaultValue]);

  function changeQuantity(newValue) {
    if (isNaN(newValue)) {
      newValue = quantity;
    } else if (newValue > maxValue) {
      newValue = maxValue;
    } else if (newValue < minValue) {
      newValue = minValue;
    }
    if (newValue !== quantity) {
      const integerValue = parseInt(newValue);
      setQuantity(integerValue);
      onChange(integerValue);
    }
  }

  return (
    <>
      <Input
        value={quantity}
        onChange={(e) => changeQuantity(e.target.value)}
        type="text"
        name="item_quantity"
        id="item_quantity"
      />
      <Controls>
        <Button onClick={() => changeQuantity(quantity + 1)}>+</Button>
        <Button onClick={() => changeQuantity(quantity - 1)}>-</Button>
      </Controls>
    </>
  );
}
