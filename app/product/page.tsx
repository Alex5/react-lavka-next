import { useParams } from "react-router";

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>();

  return <div>{productId}</div>;
}
