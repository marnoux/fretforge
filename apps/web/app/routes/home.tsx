import { Link } from "react-router";
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
import type { Route } from "./+types/home";

const sheets = [
	{
		to: "/drills/foundations-of-fury",
		level: "Level 1 · Drill Sheet",
		title: "Foundations of Fury",
	},
	{
		to: "/drills/technical-arsenal",
		level: "Level 2 · Drill Sheet",
		title: "Technical Arsenal",
	},
	{
		to: "/theory/building-blocks",
		level: "Level 2 · Theory Companion",
		title: "The Building Blocks",
	},
];

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
					<nav className="flex flex-col gap-2">
						{sheets.map((sheet) => (
							<Button
								key={sheet.to}
								asChild
								variant="outline"
								className="h-auto justify-start py-3"
							>
								<Link to={sheet.to}>
									<span className="flex flex-col items-start gap-0.5">
										<span className="text-muted-foreground text-xs uppercase tracking-wide">
											{sheet.level}
										</span>
										<span className="text-base font-semibold">
											{sheet.title}
										</span>
									</span>
								</Link>
							</Button>
						))}
					</nav>
				</CardContent>
				<CardFooter className="flex gap-3">
					<Button>Get started</Button>
					<Button variant="outline">Docs</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
