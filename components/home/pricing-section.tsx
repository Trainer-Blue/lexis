import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight, CheckIcon } from "lucide-react"

type PriceType = {
    id: string,
    name: string,
    price: number,
    description: string,
    items: string[],
    paymentLink: string,
    priceId: string
}

const plans = [
    {
        id: 'free',
        name: 'Free',
        price: 0,
        description: 'Try our service for free',
        items: ['1 free summary'],
        paymentLink: '/',
        priceId: '',
    },
    {
        id: 'basic',
        name: 'Basic',
        price: 99,
        description: 'Perfect for ocasional use',
        items: ['5 summaries per month','Standard processing time','Email support'],
        paymentLink: '/',
        priceId: '',
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 199,
        description: 'for Professionals and teams',
        items: ['Unlimited PDF summaries','Priority processing time','Priority email support','Markdown export'],
        paymentLink: '/',
        priceId: '',
    }
]

const PricingCard = ({ name,price,description,items,id,paymentLink }: PriceType) => {
    return <div className="relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300">
        <div className={cn("relative flex flex-col h-full z-10 gap-4 lg:gap-8 p-8 border-[1px] border-gray-500/20 rounded-2xl",id==='pro' && 'border-purple-500 gap-5 border-2')}>
            <div className="flex justify-between items-center gap-4">
                <div>
                    <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
                    <p className="text-base-content/80 mt-2">{description}</p>
                </div>
            </div>
            <div className="flex justify-center gap-0.5">
                <div className="text-2xl uppercase font-light">₹</div>
                <p className="text-5xl tracking-tight font-extrabold">{price}</p>
                <p className="text-2xl font-light">/month</p>
            </div>
            <div className="space-y-2.5 leading-relaxed text-base flex-1">
                {items.map((item,idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        <CheckIcon size={18} />
                        <span>{item}</span></li>
                ))}
            </div>
            <div className="space-y-2 flex justify-center w-full">
                <Link href={id==='free'?"/upload":paymentLink} className={cn("w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-br from-purple-800 to-purple-500 hover:from-purple-500 hover:to-purple-800 transition duration-300 text-white border-2 py-2",id==='pro'? 'border-purple-900':'border-purple-100 from-purple-400 to-purple-500')}>{id==='free'?"Try Now":"Buy Now"} <ArrowRight size={18}/></Link>
            </div>
        </div>
    </div>
}


export default function PricingSection() {
    return (
        <section className="relative overflow-hidden" id="pricing">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div className="flex items-center justify-center w-full pb-12">
                    <h2 className="uppercase font-bold text-xl mb-8 text-purple-500">Pricing</h2>
                </div>
                <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
                    {plans.map(plan => (
                        <PricingCard key={plan.id} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    )
}
