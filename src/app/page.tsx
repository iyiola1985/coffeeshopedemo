import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BestSellers from "@/components/sections/BestSellers";
import Testimonials from "@/components/sections/Testimonials";
import BrewingProcess from "@/components/sections/BrewingProcess";
import SubscriptionPlans from "@/components/sections/SubscriptionPlans";
import InstagramGallery from "@/components/sections/InstagramGallery";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <BestSellers />
      <Testimonials />
      <BrewingProcess />
      <SubscriptionPlans />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </main>
  );
}
