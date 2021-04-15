import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParam();
  return <h1>Hello</h1>;
}
