import React, { useEffect, useState } from "react";

import { makeResource } from "./utils";

const makeImagePath = tail => `http://image.tmdb.org/t/p/w185${tail}`;

const waitFor = ms => new Promise(r => setTimeout(r, ms));

const loadImage = src => {
  return new Promise(resolve => {
    const image = new Image();

    image.onload = async () => {
      const ms = Math.random() * 10000;
      await waitFor(ms);

      resolve();
    };

    image.src = src;
  });
};

const SuspenseImage = props => {
  const { src } = props;
  const fullPath = makeImagePath(src);

  const [imageResource, setResource] = useState(null);

  useEffect(() => {
    const resource = makeResource(loadImage(fullPath));
    setResource(resource);
  }, [fullPath]);

  if (imageResource) {
    imageResource.read();
  }

  return imageResource && <img src={fullPath} alt="" />;
};

export default SuspenseImage;
