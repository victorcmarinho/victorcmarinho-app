import { ForwardRefRenderFunction, forwardRef, memo, PropsWithoutRef } from "react";

function MOF<T, P = {}>(render: ForwardRefRenderFunction<T, PropsWithoutRef<P>>) {
  return memo(forwardRef<T, P>(render));
}

export default MOF;
