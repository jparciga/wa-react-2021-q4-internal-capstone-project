import { useEffect, useState } from "react";
import { Button, Container, Controls, Input } from "./QuantitySelector.styled";

export default function QuantitySelector({
  defaultValue = 1,
  minValue = 1,
  maxValue = Infinity,
  onChange = () => {},
  dark = false,
  inputName = "quantity_input",
  inputID = "quantity_input",
}) {
  const [quantity, setQuantity] = useState(defaultValue);

  useEffect(() => {
    onChange(defaultValue);
  }, [onChange, defaultValue]);

  function changeQuantity(newValue) {
    newValue = parseInt(newValue);
    if (isNaN(newValue)) {
      newValue = quantity;
    } else if (newValue > maxValue) {
      newValue = maxValue;
    } else if (newValue < minValue) {
      newValue = minValue;
    }
    if (newValue !== quantity) {
      const integerValue = newValue;
      setQuantity(integerValue);
      onChange(integerValue);
    }
  }

  return (
    <Container>
      <Input
        value={quantity}
        onChange={(e) => changeQuantity(e.target.value)}
        type="text"
        name={inputName}
        id={inputID}
      />
      <Controls>
        <Button dark={dark} onClick={() => changeQuantity(quantity + 1)}>
          +
        </Button>
        <Button dark={dark} onClick={() => changeQuantity(quantity - 1)}>
          -
        </Button>
      </Controls>
    </Container>
  );
}
