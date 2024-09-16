import {
	Chat,
	Discover,
	Hero,
	Map,
	Mission,
	Project,
	Services,
	Solution,
	Values,
	Vision,
} from "@/sections";

export default function Home() {
	return (
		<main className="relative">
			<Hero />
			<Mission />
			<Project />
			<Solution />
      <Map />
			<Discover />
			<Vision />
			<Values />
			<Chat />
		</main>
	);
}
