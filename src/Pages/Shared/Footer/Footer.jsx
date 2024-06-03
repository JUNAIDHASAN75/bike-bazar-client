import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className="bg-[]">
            <footer className="footer p-10 bg-[#0B0D17] py-20 text-neutral-content">
                <aside className="w-3/4">
                    <div>
                        <ul className="flex gap-4">
                            <li><Link>About</Link></li>
                            <li><Link>Features</Link></li>
                            <li><Link>Pricing</Link></li>
                            <li><Link>Careers</Link></li>
                            <li><Link>Help</Link></li>
                            <li><Link>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <small>© {currentYear} bike. All rights reserved</small>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                    </div>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;