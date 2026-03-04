"use client";

import { RouteEnter } from "./components/animated/MotionPrimitives";

export default function Template({ children }) {
  return <RouteEnter>{children}</RouteEnter>;
}
