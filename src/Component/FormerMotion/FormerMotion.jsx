import { useState } from "react";
import { motion } from "framer-motion";
import './Former.css'
const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const FormerMotion = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="menu"
        >
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-purple-500 text-white p-2 rounded"
            >
                Menu
                <motion.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                    className="inline-block ml-2"
                >
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16 Z" />
                    </svg>
                </motion.div>
            </motion.button>

            <motion.ul className="mt-2" initial="closed" animate={isOpen ? "open" : "closed"}>
                {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map((item, i) => (
                    <motion.li
                        key={i}
                        className="bg-white p-2 my-1 rounded shadow cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.nav>
    );
};

export default FormerMotion;