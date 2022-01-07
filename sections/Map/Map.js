import React from "react";

const Map = () => {
  return (
    <section style={{ padding: "0 " }}>
      <div>
        <iframe
          title="Feder-Bau-Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11859.4652648714!2d20.9959917!3d42.0031445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f2ccc3f384f5385!2sFeder-Bau!5e0!3m2!1sen!2smk!4v1632578605542!5m2!1sen!2smk"
          width="100%"
          height={400}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Map;
