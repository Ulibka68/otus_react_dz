import React from "react";
// import RechartsDemo from "components/recharts/rechartsDemo";

const RechartsDemo = React.lazy(
  () => import("@/components/recharts/rechartsDemo")
);

export class RechartsLazy extends React.Component<any, any> {
  render() {
    return (
      <div>
        <React.Suspense fallback={<div>Загрузка...</div>}>
          <RechartsDemo />
        </React.Suspense>
      </div>
    );
  }
}
