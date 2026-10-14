import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import type { FeaturedRepo } from "../data/featuredRepos"

export function FeaturedRepoCard({ repo, index }: { repo: FeaturedRepo; index: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.a
      href={repo.href}
      target="_blank"
      rel="noreferrer noopener"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: reduce ? 0 : 0.55,
        delay: reduce ? 0 : index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduce ? undefined : { y: -4 }}
      className="group flex h-full flex-col border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-blue/40 hover:bg-white/[0.04]"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="font-display text-lg tracking-tight text-ivory group-hover:text-blue">
          {repo.name}
        </p>
        <ArrowUpRight
          className="mt-1 h-4 w-4 shrink-0 text-mist transition-colors group-hover:text-blue"
          aria-hidden="true"
        />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{repo.description}</p>
      <p className="mt-5 flex items-center gap-2 text-xs text-mist">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: repo.languageColor }}
          aria-hidden="true"
        />
        {repo.language}
      </p>
    </motion.a>
  )
}
