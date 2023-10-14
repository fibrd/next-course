"use client";
import React, { useState } from "react";
import _ from "lodash";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "a" }, { name: "b" }];
          const sortedArray = _.orderBy(users, ["name"]);
          console.log(sortedArray);
        }}
      >
        Show
      </button>
    </div>
  );
};

export default ProductPage;
