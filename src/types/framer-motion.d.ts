import { Variants } from "framer-motion"

declare module "framer-motion" {
    interface Variants {
        viewport?: {
            once?: boolean
            margin?: string
        }
    }
} 