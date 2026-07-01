import { FiMessageCircle } from 'react-icons/fi';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801738178608"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-accent px-4 py-3 font-semibold text-white shadow-xl transition hover:scale-105"
      aria-label="Contact via WhatsApp"
    >
      <FiMessageCircle className="text-xl" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
