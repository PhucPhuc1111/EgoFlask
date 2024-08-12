import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css?url";
import { Header } from "./components";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles, as: "style" },
  { rel: "stylesheet", href: "/css/tailwind1.css" },
];

export default function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/images/favicon.ico" rel="icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"}></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <title>EgoFlask</title>
        <meta name="description" content="Ego Flask" />
        <Meta />
        <Links />
      </head>
      <QueryClientProvider client={queryClient}>
        <body>
          <div id="wrapper">
            <Header />
            <Outlet />
          </div>
          <ScrollRestoration />
          <Scripts />
        </body>
      </QueryClientProvider>
    </html>
  );
}
