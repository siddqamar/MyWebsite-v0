import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  link: string
  className?: string
}

export default function ProjectCard({ title, description, link, className }: ProjectCardProps) {
  return (
    <div className={`${className} flex flex-col justify-between h-full`}>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
        View Project
      </Link>
    </div>
  )
}

