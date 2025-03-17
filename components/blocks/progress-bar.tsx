import { CheckIcon } from 'lucide-react'

const steps = [
  { name: 'Basic Frontend Development', description: 'HTML, CSS, JavaScript.', status: 'complete' },
  { name: 'Advanced Frontend Development', description: 'React, Next.js, React Native.', status: 'complete' },
  { name: 'Backend Development', description: 'Node.js, Python, PostgreSQL.', status: 'complete' },
  { name: 'AI & Machine Learning', description: 'Python, Algorithms, Deep Learning, NLP', status: 'current' },
  { name: 'AI Systems Architecture', description: 'Large Language Models, TensorFlow, AI Infrastructure', status: 'upcoming' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProgressBar() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div aria-hidden="true" className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-400" />
                ) : null}
                <p className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-red-400">
                      <CheckIcon aria-hidden="true" className="size-5 text-white" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </p>
              </>
            ) : step.status === 'current' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div aria-hidden="true" className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" />
                ) : null}
                <p aria-current="step" className="group relative flex items-start">
                  <span aria-hidden="true" className="flex h-9 items-center">
                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-red-400 p-[2px]">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-white">
                        <span className="size-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-red-400" />
                      </span>
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium bg-gradient-to-r from-[#d8be48] to-red-600 text-transparent bg-clip-text">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </p>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div aria-hidden="true" className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" />
                ) : null}
                <p className="group relative flex items-start">
                  <span aria-hidden="true" className="flex h-9 items-center">
                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      <span className="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-gray-500">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </p>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
