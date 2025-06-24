import { Container } from "@shared/ui/container/container";
import { Header } from "./components/header/header";
import {ReactNode} from "react";

export default function RootPageLayout({children}: {children: ReactNode}) {
    return (
    <>
      <Header />
      <Container>
          {children}
      </Container>
    </>
  );
}
