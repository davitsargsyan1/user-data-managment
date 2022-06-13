import React, { Suspense } from "react";

const withSuspense =
  (WrappedComponent, FallbackComponent = "") =>
  (props) =>
    (
      <Suspense fallback={FallbackComponent}>
        <WrappedComponent {...props} />
      </Suspense>
    );

export default withSuspense;
