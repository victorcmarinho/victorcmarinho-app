import { ForwardRefRenderFunction, forwardRef, memo } from "react";

function MOF<T, P = {}>(render: ForwardRefRenderFunction<T, P>) {
  return memo(forwardRef<T, P>(render));
}

export default MOF;
