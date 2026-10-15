import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const categories = [
  "All",
  "Church Graphics",
  "Branding & Print",
  "Merch & Apparel",
  "Posters",
];

const artworks = [
  ...Array.from({ length: 6 }, (_, index) => ({
    title: `ACTS ${index + 1}`,
    category: "Church Graphics",
    type: "Church graphic",
    image: `/images/ACTS-${index + 1}.png`,
  })),
  {
    title: "Envo Brochure Front",
    category: "Branding & Print",
    type: "Brochure design",
    image: "/images/Envo-1.png",
  },
  {
    title: "Envo Brochure Back",
    category: "Branding & Print",
    type: "Brochure design",
    image: "/images/Envo-2.png",
  },
  {
    title: "Front Page UI Design",
    category: "Branding & Print",
    type: "Website Design",
    image: "/images/UI-Gadget-Store.png",
  },
  {
    title: "Likha Logo in Blue",
    category: "Branding & Print",
    type: "Logo design",
    image: "/images/Likha.png",
  },
  {
    title: "Tokki Totebag",
    category: "Merch & Apparel",
    type: "Shirt & tote bag",
    image: "/images/Tokki-1.png",
  },
  {
    title: "Tokki Shirt Back",
    category: "Merch & Apparel",
    type: "Shirt & tote bag",
    image: "/images/Tokki-2.png",
  },
  {
    title: "Tokki Shirt Front",
    category: "Merch & Apparel",
    type: "Shirt & tote bag",
    image: "/images/Tokki-3.png",
  },
  {
    title: "Binder Cover Kpop",
    category: "Merch & Apparel",
    type: "Print design",
    image: "/images/BinderCover.png",
  },
  {
    title: "Shirt Design BURN",
    category: "Merch & Apparel",
    type: "Custom shirt design",
    image: "/images/BURN.png",
  },
  {
    title: "Animal",
    category: "Posters",
    type: "Poster design",
    image: "/images/Animal.png",
  },
  {
    title: "Infographics 1",
    category: "Posters",
    type: "Poster design",
    image: "/images/Poster-1.png",
  },
  {
    title: "Infographics 2",
    category: "Posters",
    type: "Poster design",
    image: "/images/Poster-2.png",
  },
];

function useCardsPerSlide() {
  const [cardsPerSlide, setCardsPerSlide] = useState(1);

  useEffect(() => {
    function updateCardsPerSlide() {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(1);
      }
    }

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  return cardsPerSlide;
}

function ArtworkLightbox({ artwork, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      aria-label={`${artwork.title} full-size image`}
      className="m-auto max-h-[95vh] max-w-[95vw] overflow-visible bg-transparent p-0 text-white backdrop:bg-black/90"
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      ref={dialogRef}
    >
      <div className="relative flex max-h-[95vh] max-w-[95vw] flex-col items-center">
        <button
          aria-label="Close image preview"
          className="absolute right-2 top-2 z-10 grid size-10 place-items-center rounded-full bg-black/70 text-white transition hover:bg-black focus-visible:outline-white"
          onClick={onClose}
          type="button"
        >
          <X size={20} aria-hidden="true" />
        </button>
        <img
          alt={`${artwork.title} — ${artwork.type}`}
          className="max-h-[85vh] max-w-[95vw] object-contain"
          src={artwork.image}
        />
        <p className="mt-3 text-center text-sm font-medium">
          {artwork.title}
          <span className="ml-2 text-white/70">{artwork.type}</span>
        </p>
      </div>
    </dialog>
  );
}

function DesignSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxArtwork, setLightboxArtwork] = useState(null);
  const cardsPerSlide = useCardsPerSlide();

  const filteredArtworks = useMemo(
    () =>
      activeCategory === "All"
        ? artworks
        : artworks.filter((artwork) => artwork.category === activeCategory),
    [activeCategory],
  );

  const slides = useMemo(() => {
    const groupedSlides = [];
    for (
      let index = 0;
      index < filteredArtworks.length;
      index += cardsPerSlide
    ) {
      groupedSlides.push(filteredArtworks.slice(index, index + cardsPerSlide));
    }
    return groupedSlides;
  }, [cardsPerSlide, filteredArtworks]);

  const currentSlide = Math.min(activeSlide, Math.max(slides.length - 1, 0));

  function changeCategory(category) {
    setActiveCategory(category);
    setActiveSlide(0);
  }

  function moveSlide(direction) {
    setActiveSlide((slide) =>
      Math.min(Math.max(slide + direction, 0), slides.length - 1),
    );
  }

  return (
    <section className="section page-shell mx-auto max-w-6xl" id="design">
      <SectionHeading
        eyebrow="A LITTLE MORE ABOUT ME"
        title="Visual work beyond the screen."
        description="For around two years, I created church announcements, event graphics, invitations, social posts, and promotional materials with the Highlights Team / JMICM. I also work on logo design, merch/apparel, brochures, and posters."
      />

      <div
        aria-label="Filter artwork by category"
        className="mb-6 flex flex-wrap gap-2"
        role="group"
      >
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              aria-pressed={isActive}
              className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8750f7] ${
                isActive
                  ? "border-[#477ce5] bg-[#477ce5] text-white"
                  : "border-[#e3e5eb] bg-white text-[#4d515b] hover:border-[#477ce5] hover:text-[#3567cc]"
              }`}
              key={category}
              onClick={() => changeCategory(category)}
              type="button"
            >
              {category}
              {category === "Church Graphics" && (
                <span className="ml-1.5 opacity-75"></span>
              )}
              {category === "Branding & Print" && (
                <span className="ml-1.5 opacity-75"></span>
              )}
              {category === "Merch & Apparel" && (
                <span className="ml-1.5 opacity-75"></span>
              )}
              {category === "Posters" && (
                <span className="ml-1.5 opacity-75"></span>
              )}
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden">
        <div
          aria-live="polite"
          className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              aria-label={`Slide ${slideIndex + 1} of ${slides.length}`}
              className="grid w-full shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              key={`${activeCategory}-${slideIndex}`}
            >
              {slide.map((artwork) => (
                <button
                  aria-label={`View ${artwork.title}, ${artwork.type}`}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg border border-[#e3e4e9] bg-[#eef1f8] text-left shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8750f7]"
                  key={artwork.title}
                  onClick={() => setLightboxArtwork(artwork)}
                  type="button"
                >
                  <img
                    alt=""
                    className="h-full w-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02] motion-reduce:transition-none"
                    loading="lazy"
                    src={artwork.image}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0 opacity-80 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 flex translate-y-1 flex-col gap-2 p-4 text-white opacity-100 transition duration-200 group-hover:translate-y-0 group-focus-visible:translate-y-0 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100">
                    <span className="text-sm font-bold">{artwork.title}</span>
                    <span className="w-fit rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm">
                      {artwork.category} · {artwork.type}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          aria-label="Previous slide"
          className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-[#e1e3e9] bg-white text-[#252730] transition hover:border-[#477ce5] hover:text-[#477ce5] disabled:cursor-not-allowed disabled:opacity-40"
          disabled={currentSlide === 0}
          onClick={() => moveSlide(-1)}
          type="button"
        >
          <ArrowLeft size={18} aria-hidden="true" />
        </button>

        <div
          aria-label="Choose slide"
          className="flex flex-wrap justify-center gap-2"
        >
          {slides.map((_, index) => (
            <button
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={currentSlide === index}
              className={`h-2.5 cursor-pointer rounded-full transition-all ${
                currentSlide === index
                  ? "w-7 bg-[#477ce5]"
                  : "w-2.5 bg-[#cdd2de] hover:bg-[#8750f7]"
              }`}
              key={index}
              onClick={() => setActiveSlide(index)}
              type="button"
            />
          ))}
        </div>

        <button
          aria-label="Next slide"
          className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-[#e1e3e9] bg-white text-[#252730] transition hover:border-[#477ce5] hover:text-[#477ce5] disabled:cursor-not-allowed disabled:opacity-40"
          disabled={currentSlide >= slides.length - 1}
          onClick={() => moveSlide(1)}
          type="button"
        >
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>

      <p className="design-note">
        Showing {filteredArtworks.length} selected works in {slides.length}{" "}
        {slides.length === 1 ? "slide" : "slides"}. Select an artwork to view it
        full size.
      </p>

      {lightboxArtwork && (
        <ArtworkLightbox
          artwork={lightboxArtwork}
          onClose={() => setLightboxArtwork(null)}
        />
      )}
    </section>
  );
}

export default DesignSection;
