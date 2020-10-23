import React from "react";

const RechartsDemo = React.lazy(
  () => import("@/components/recharts/rechartsDemo")
);

export class RechartsLazy extends React.Component<any, any> {
  render() {
    return (
        <React.Suspense fallback={<div>Загрузка...</div>}>
          <RechartsDemo />
        </React.Suspense>
    );
  }
}
