import { Div } from "@/shared/ui/div/div";
import { Grid } from "@/shared/ui/grid/grid";
import { Skeleton } from "@/shared/ui/skeleton/skeleton";

export function ProductListSekeltom() {
  return (
    <Grid>
      {Array.from({ length: 10 }).map((_, idx) => (
        <Div
          flex
          flexCol
          gap1
          key={idx}
          style={{ maxWidth: "100%", height: "100%" }}
        >
          <Skeleton style={{ width: "100%", aspectRatio: "1/1" }} />
          <Skeleton style={{ minHeight: "20px" }} />
          <Skeleton style={{ minHeight: "20px" }} />
        </Div>
      ))}
    </Grid>
  );
}
