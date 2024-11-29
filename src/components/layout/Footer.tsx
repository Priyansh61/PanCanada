import Link from "next/link";
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
export default function Footer() {
  return (
    <footer className="bg-[#FDF8F6] text-black py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Footer Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/pancard1 (1).png"
                alt="Pan Canada Logo"
                className="w-36 mx-auto md:mx-0"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              The Pan Canada Group is a multinational management and holding
              firm with operations in America, Europe, and Asia. Its primary
              holdings are major insurance, retirement, wealth management, and
              investment companies, as well as a portfolio of alternative asset
              investing platforms.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="text-lg font-semibold mt-6 mb-5 mx-28">COMPANY</h5>
            <ul className="space-y-4 mx-28">
              <li><Link href="/" className="hover:text-sky-400"   onClick={() => scrollToSection("home")}>Home</Link></li>
              <li><Link href="/about" className="hover:text-sky-400"   onClick={() => scrollToSection("about")}>About </Link></li>
              <li><Link href="/services" className="hover:text-sky-400"  onClick={() => scrollToSection("services")}>Services</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400"  onClick={() => scrollToSection("contact")}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h5 className="text-lg font-semibold mt-5  mb-5">CONTACT US</h5>
            <ul className="space-y-3">
              <li>
                <p className="font-medium">Address:</p>
                <p>Yonge St, North York, ON M2N 5P6, Canada</p>
              </li>
              <li>
                <p className="font-medium">Email:</p>
                <p><Link href="mailto:info@brassfieldturnergroup.ca" className="hover:text-sky-400">info@brassfieldturnergroup.ca</Link></p>
              </li>
              <li>
                <p className="font-medium">Phone:</p>
                <p><Link href="tel:+96597381477" className="hover:text-sky-400">+96597381477</Link></p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center border-t border-gray-700 pt-6">
          <p className="text-sm">
            &copy; 2024 Pan Canada. Powered by{" "}
            <Link href="https://github.com/Priyansh61" className="text-sky-400 hover:underline" target="_blank">
              Priyansh61
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
