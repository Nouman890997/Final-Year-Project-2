import React from "react";
import "./About.css";

import petSaleImg from "../assets/Sale&Purchase.jpg";
import petFoodImg from "../assets/petFoodImg.jpg";
import petConsultImg from "../assets/petConsultImg.jpg";
import founder1 from "../assets/Ahsan.jpg";
import founder2 from "../assets/Hanzla_Pic.jpg";
import founder3 from "../assets/download.png";

const About_Component = () => {
  return (
    <div className="about-container">
      <section className="about-introduction center-content">
        <div className="about-text">
          <h2 className="section-title">Welcome to Petorius</h2>
          <p>
            Petorius is your one-stop platform for everything related to pets.
            Whether you're buying or selling pets, shopping for food or medicine,
            or seeking expert veterinary consultation — we've got you covered.
          </p>
          <p>
            Our platform brings convenience, care, and trust to your doorstep. 
            With Petorius, pet owners, lovers, and veterinarians can all connect
            seamlessly to ensure pets receive the best care possible.
          </p>
        </div>
      </section>

      <section className="about-services">
        <h2 className="section-title center-content">Our Services</h2>

        <div className="service-row">
          <div className="service-item">
            <h3>Pet Sale & Purchase</h3>
            <p>
              Petorius connects pet lovers looking to adopt, buy, or rehome pets.
              Safe and trusted transactions guaranteed. Whether you're looking
              for a playful puppy, a calm older cat, or exotic pets, we provide
              a variety of options that suit every need and lifestyle.
            </p>
            <p>
              We ensure all pets listed on our platform are healthy, vaccinated,
              and ready for a loving home. With an easy-to-use interface, 
              Petorius allows users to browse listings, filter by breed, age, 
              and location, and make secure transactions.
            </p>
          </div>
          <div className="service-image-container">
            <img src={petSaleImg} alt="Pet Sale" className="service-image" />
          </div>
        </div>

        <div className="service-row">
          <div className="service-image-container">
            <img src={petConsultImg} alt="Consultation" className="service-image" />
          </div>
          <div className="service-item">
            <h3>Veterinary Consultation</h3>
            <p>
              Book appointments or chat live with certified pet doctors for any
              health concerns, right from your home. Whether your pet needs a routine
              check-up, vaccinations, or treatment for a specific health issue,
              our veterinarians are here to help.
            </p>
            <p>
              You can easily book appointments through our platform or have
              instant video consultations with top-tier veterinarians. We
              prioritize your pet's health, ensuring they receive timely care and
              expert advice. No more long waits at clinics — quality healthcare
              at your convenience.
            </p>
          </div>
        </div>

        <div className="service-row">
          <div className="service-item">
            <h3>Pet Feed & Medicine</h3>
            <p>
              Get premium-quality pet food and essential medicine delivered right
              to your doorstep for all breeds and types. We collaborate with trusted
              brands to offer a wide variety of food, supplements, and medications
              tailored to your pet's specific needs.
            </p>
            <p>
              Whether you're feeding a puppy, a senior dog, or a finicky feline,
              we have options for every age and dietary need. From organic food to
              specialized veterinary diets, you'll find everything you need in one
              place. Plus, medications for common conditions such as fleas, allergies.
            </p>
          </div>
          <div className="service-image-container">
            <img src={petFoodImg} alt="Pet Food" className="service-image" />
          </div>
        </div>
      </section>

      <section className="about-mission center-content">
        <h2 className="section-title">Our Mission</h2>
        <p>
          We're committed to revolutionizing pet care by combining technology
          and compassion. Petorius is where love meets convenience — for pets
          and their people. Our mission is to bridge the gap between pet owners
          and high-quality pet services, from purchasing pets to providing
          specialized healthcare.
        </p>
        <p>
          We believe in providing a platform that simplifies pet care and creates
          lasting relationships between pets, owners, and pet care professionals.
          By making everything accessible online, we’re making life easier for
          busy pet parents while ensuring their pets receive the best care possible.
        </p>
      </section>

      <section className="about-team center-content">
        <h2 className="section-title">Meet the Founders</h2>
        <p>
          Our team of developers, veterinarians, pet lovers, and customer care
          experts work behind the scenes to deliver excellence in every interaction.
          Petorius was founded with the belief that pets deserve the best care and
          that pet owners should have access to all the tools they need to ensure
          their pet's well-being.
        </p>

        <div className="founder-images">
          <img src={founder1} alt="Founder 1" />
          <img src={founder2} alt="Founder 2" />
          <img src={founder3} alt="Founder 3" />
        </div>
      </section>
    </div>
  );
};

export default About_Component;
