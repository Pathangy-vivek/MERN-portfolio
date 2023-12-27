import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  return (
    <div>
      <SectionTitle title="Drop Me a Line" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>

          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5" key={key}>
                  <span className="text-tertiary">{key} :</span>
                  <span className="text-tertiary">{contact[key]}</span>
                </p>
              )
          )}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/d5ddcf7b-1db5-47d5-92b2-0a85bd2b1f2f/hqPpR2qAeh.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
