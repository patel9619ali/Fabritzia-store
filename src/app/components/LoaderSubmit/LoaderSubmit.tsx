import React from "react";
type Parse = {
    pending: Boolean
}
export function LoaderSubmit({pending}:Parse){
    return(
        <>
        {pending ? (<p>Pending Loading</p>):
          (<input type="submit" className="mb-3"/>)
        }
        </>
    )
}