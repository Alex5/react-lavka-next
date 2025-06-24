"use client"

import React, { createContext, useContext } from "react";
import { Text } from "../text/Text";
import { Button } from "../button/button";

type RootProps = {
  quantity: number;
  onChange?: (value: number) => void;
  children: React.ReactNode;
};

type ProductQuantitySelectorContextType = {
  quantity: number;
  onChange?: (value: number) => void;
};

const ProductQuantitySelectorContext =
  createContext<ProductQuantitySelectorContextType | null>(null);

const useQuantityContext = () => {
  const context = useContext(ProductQuantitySelectorContext);

  if (!context) {
    throw new Error(
      "ProductQuantitySelector components must be used within ProductQuantitySelector"
    );
  }

  return context;
};

export const ProductQuantitySelector = ({
  onChange,
  children,
  quantity,
}: RootProps) => {
  return (
    <ProductQuantitySelectorContext.Provider value={{ quantity, onChange }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          backgroundColor: "rgba(101,92,78,.1)",
          borderRadius: "12px",
          height: "32px",
          justifyContent: "space-around",
        }}
      >
        {children}
      </div>
    </ProductQuantitySelectorContext.Provider>
  );
};

const Increment = ({
  onIncrement,
}: {
  onIncrement?: (quantity: number) => void;
}) => {
  const { quantity, onChange } = useQuantityContext();

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();

        onChange?.(quantity + 1);

        onIncrement?.(quantity + 1);
      }}
      shadow="none"
      icon
      size="sm"
      style={{
        backgroundColor: "transparent",
        borderRadius: "inherit",
        height: "inherit",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 6a1 1 0 00-1 1v4H7a1 1 0 100 2h4v4a1 1 0 102 0v-4h4a1 1 0 100-2h-4V7a1 1 0 00-1-1z"
        ></path>
      </svg>
    </Button>
  );
};

const Decrement = ({
  onDecrement,
}: {
  onDecrement?: (quantity: number) => void;
}) => {
  const { quantity, onChange } = useQuantityContext();

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();

        onChange?.(quantity - 1);

        onDecrement?.(quantity - 1);
      }}
      shadow="none"
      style={{
        backgroundColor: "transparent",
        borderRadius: "inherit",
        height: "inherit",
      }}
      size="sm"
      icon
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 12a1 1 0 001 1h10a1 1 0 100-2H7a1 1 0 00-1 1z"
        ></path>
      </svg>
    </Button>
  );
};

const Quantity = () => {
  const { quantity } = useQuantityContext();

  return (
    <Text fontSize="sm" fontWeight="medium">
      {quantity}
    </Text>
  );
};

ProductQuantitySelector.Increment = Increment;
ProductQuantitySelector.Decrement = Decrement;
ProductQuantitySelector.Quantity = Quantity;
