import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FretForge" },
    {
      name: "description",
      content: "FretForge web app — React Router v7 + shadcn/ui",
    },
  ];
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>FretForge</CardTitle>
          <CardDescription>
            React Router v7 (framework mode) + shadcn/ui, in a Turborepo.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input placeholder="Search the fretboard…" />
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button>Get started</Button>
          <Button variant="outline">Docs</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
