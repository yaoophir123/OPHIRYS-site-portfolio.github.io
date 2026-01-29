const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "L'Avenir de la Mode : Techwear & Élégance",
      excerpt: "Comment OPHIRYS redéfinit les codes du vêtement urbain en intégrant des matériaux futuristes.",
      date: "12 Oct 2024",
      author: "Sophie K.",
      image: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Collection 'Duo' : L'Harmonie Parfaite",
      excerpt: "Découvrez les coulisses de notre nouvelle collection couple, conçue pour les âmes connectées.",
      date: "05 Oct 2024",
      author: "Marc D.",
      image: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Street Style : Les Tendances d'Abidjan",
      excerpt: "Reportage photo sur l'influence grandissante de la mode ivoirienne sur la scène internationale.",
      date: "28 Sep 2024",
      author: "Yao O.",
      image: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">LE JOURNAL OPHIRYS</h1>
          <p className="text-gray-400">Perspectives, tendances et actualités de la marque.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-brand-gray rounded-lg overflow-hidden border border-gray-800 hover:border-brand-gold/30 transition-all group">
              <div className="h-60 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all">
                  Lire l'article <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

// Placeholder for generated image
const COUPLE_IMAGE = "https://static.lumi.new/06/0634b3a61cda20ed2f411e41c8b029cf.jpeg";

const products = [
  { id: 1, name: "Veste Cyber-Tech", price: "180 €", category: "Homme", image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Best Seller" },
  { id: 2, name: "Robe Néo-Élégance", price: "220 €", category: "Femme", image: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Nouveau" },
  { id: 3, name: "Ensemble Duo Futur", price: "350 €", category: "Couple", image: COUPLE_IMAGE, tag: "Collection Couple" },
  { id: 4, name: "Pantalon Cargo Noir", price: "120 €", category: "Homme", image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 5, name: "Top Asymétrique", price: "85 €", category: "Femme", image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 6, name: "Blouson Aviateur Or", price: "250 €", category: "Homme", image: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const Collection = () => {
  const [filter, setFilter] = useState("Tous");

  const filteredProducts = filter === "Tous" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">COLLECTION 2024</h1>
          <p className="text-gray-400">Découvrez nos dernières créations audacieuses.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Tous", "Homme", "Femme", "Couple"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all ${
                filter === cat 
                  ? "bg-brand-gold border-brand-gold text-brand-dark font-bold" 
                  : "border-gray-700 text-gray-400 hover:border-brand-gold hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group bg-brand-gray rounded-lg overflow-hidden border border-gray-800 hover:border-brand-gold/30 transition-all"
            >
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded">
                    {product.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-brand-dark font-bold px-6 py-3 rounded hover:scale-105 transition-transform">
                    Voir Détails
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs text-brand-gold mb-1 uppercase tracking-wide">{product.category}</p>
                    <h3 className="text-white font-bold text-lg">{product.name}</h3>
                  </div>
                  <span className="text-white font-display font-bold">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

import React from 'react';
import {Mail, Phone, MapPin, Send} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès ! Nous vous répondrons sous 24h.", {
      style: {
        background: '#1A1A1A',
        color: '#fff',
        border: '1px solid #FFD700',
      }
    });
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-dark">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">CONTACTEZ-NOUS</h1>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              Une question sur nos collections ? Besoin d'un conseil style ? 
              Notre équipe est à votre disposition pour vous accompagner dans l'univers OPHIRYS.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-gray rounded-full flex items-center justify-center text-brand-gold shrink-0 border border-gray-800">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:yaoophir123@gmail.com" className="text-gray-400 hover:text-brand-gold transition-colors">yaoophir123@gmail.com</a>
                  <p className="text-gray-500 text-sm mt-1">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-gray rounded-full flex items-center justify-center text-brand-gold shrink-0 border border-gray-800">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Téléphone</h3>
                  <a href="tel:0503013947" className="text-gray-400 hover:text-brand-gold transition-colors">05 03 01 39 47</a>
                  <p className="text-gray-500 text-sm mt-1">Lun-Ven: 9h - 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-gray rounded-full flex items-center justify-center text-brand-gold shrink-0 border border-gray-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Siège</h3>
                  <p className="text-gray-400">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-gray p-8 md:p-10 rounded-2xl border border-gray-800">
            <h2 className="font-display text-2xl font-bold text-white mb-6">Envoyez un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Nom complet</label>
                  <input required type="text" className="w-full bg-brand-dark border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <input required type="email" className="w-full bg-brand-dark border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="votre@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Sujet</label>
                <select className="w-full bg-brand-dark border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors">
                  <option>Question générale</option>
                  <option>Commande</option>
                  <option>Collaboration</option>
                  <option>Presse</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea required rows={5} className="w-full bg-brand-dark border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-brand text-white font-bold py-4 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2 uppercase tracking-wide">
                <Send size={18} /> Envoyer le message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
