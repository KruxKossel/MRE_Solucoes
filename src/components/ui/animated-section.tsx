import { motion, Variants } from "framer-motion"
import { ReactNode, memo } from "react"

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    delay?: number
    id?: string
    variants?: Variants
}

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" }
} as const

const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" }
} as const

const zoomIn = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" }
} as const

const defaultTransition = { duration: 0.5 }

export const AnimatedSection = memo(function AnimatedSection({ 
    children, 
    className = "", 
    delay = 0, 
    id,
    variants = fadeInUp 
}: AnimatedSectionProps) {
    return (
        <motion.section
            id={id}
            className={className}
            {...variants}
            transition={{ ...defaultTransition, delay }}
            role="region"
            aria-label={id}
        >
            {children}
        </motion.section>
    )
})

export const AnimatedText = memo(function AnimatedText({ 
    children, 
    className = "", 
    delay = 0,
    variants = fadeIn 
}: AnimatedSectionProps) {
    return (
        <motion.div
            className={className}
            {...variants}
            transition={{ ...defaultTransition, delay }}
        >
            {children}
        </motion.div>
    )
})

export const AnimatedImage = memo(function AnimatedImage({ 
    children, 
    className = "", 
    delay = 0,
    variants = zoomIn 
}: AnimatedSectionProps) {
    return (
        <motion.div
            className={className}
            {...variants}
            transition={{ ...defaultTransition, delay }}
        >
            {children}
        </motion.div>
    )
}) 