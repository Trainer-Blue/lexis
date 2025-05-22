import { BrainCircuit, FileOutput, FileText } from "lucide-react";
import { ReactNode } from "react";
type Steps = {
    icon: ReactNode;
    label: string;
    description: string;
}

const steps: Steps[] = [
    {
        icon: <FileText size={64} strokeWidth={1.5}/>,
        label: 'Upload PDF',
        description: 'Upload any PDF document you want to summarize'
    },
    {
        icon: <BrainCircuit size={64} strokeWidth={1.5}/>,
        label: 'Ai analysis',
        description: 'Our AI will analyze the document and generate a summary'
    },
    {
        icon: <FileOutput size={64} strokeWidth={1.5}/>,
        label: 'Get Summary',
        description: 'Receive a summary of the document in a few seconds'
    }
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-purple-100/30">
        <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="text-center mb-16">
            <h2 className="font-bold text-xl uppercase mb-4 text-purple-500">
                How It Works
            </h2>
            <h3 className="font-bold text-3xl max-w-2xl mx-auto">
                Transform any PDF into an easy-to-digest summary in three simple steps
            </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {steps.map((step,idx) => (
                <StepItem key={idx} {...step} />
            ))
            }
        </div>
        </div>
    </section>
    );
}

function StepItem({icon, label, description}: Steps) {
    return (
        <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-purple-500/50 transition-colors group w-full">
            <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from-purple-500/10 to-transparent group-hover:from-purple-500/20 transition-colors">
                    <div className="text-purple-500">{icon}</div>
                </div>
                <div className="flex flex-col flex-1 gap-1 justify-between">    
                    <h4 className="text-center font-bold text-xl">{label}</h4>
                    <p className="text-center text-gray-600 text-sm">{description}</p>
                </div>
            </div>
        </div>
    )
}