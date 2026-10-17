import { ContributionGraph } from "../components/ContributionGraph"
import { FeaturedRepoCard } from "../components/FeaturedRepoCard"
import { Reveal } from "../components/Reveal"
import { featuredRepos } from "../data/featuredRepos"

/** Activity block shown under the project case studies (same Projects section). */
export function GitHub() {
  return (
    <div className="mt-20 border-t border-line pt-16">
      <Reveal>
        <p className="font-display text-[0.72rem] tracking-[0.18em] text-blue uppercase">
          On GitHub
        </p>
        <h3 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ivory sm:text-4xl">
          Public proof of the build habit.
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist">
          Live contribution activity from mohitt38, plus the repositories behind the systems above.
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <div className="mt-10">
          <ContributionGraph />
        </div>
      </Reveal>
      <div className="mt-10">
        <p className="font-display text-[0.72rem] tracking-[0.18em] text-blue uppercase">
          Featured repositories
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {featuredRepos.map((repo, index) => (
            <FeaturedRepoCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
