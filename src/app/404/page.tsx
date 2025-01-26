"use client";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { useEffect } from "react";

const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    // Redirect to the home page when the component mounts
    router.replace("/");
  }, [router]);

  return null;
};
export default Custom404;
