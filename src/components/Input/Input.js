import { ForwardedRef, forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
    return (
        <input ref={ref} className="form-control my-3" {...props} />
    )
})

