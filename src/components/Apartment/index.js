import React from "react";

export default function Index({
  match: {
    params: { apartmentId },
  },
}) {
  return <div>apartment {apartmentId}</div>;
}
