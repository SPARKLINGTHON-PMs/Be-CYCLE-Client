import React, { use, useEffect } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/account/login');
  }, [])

  return
}
