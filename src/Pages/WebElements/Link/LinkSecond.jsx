import React from "react";

const LinkSecond = () => {
  return (
    <div className=" rounded-md p-4">
      <h2 className="font-bold text-[25px] pb-6">Privacy Policy</h2>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        A <span className="font-bold">Privacy Policy</span> is a legal document
        where you specify if you collect personal data from your users, what
        kind of personal data you collect, what you do with that data, and other
        important information about your privacy practices.
      </p>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        In this article we'll discuss a few of the laws that require Privacy
        Policies, as well as what content you'll need to put in a Privacy Policy
        when creating one.
      </p>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        A Privacy Policy is required by law if you collect personal data.
        Personal data is any kind of data or information that can be considered
        personal (identifies an individual), such as:
      </p>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        <ul className="ps-5">
          <li className="list-disc">Email address </li>
          <li className="list-disc">First and last name </li>
          <li className="list-disc">Billing and shipping address</li>
          <li className="list-disc">Credit card information</li>
        </ul>
      </p>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        A Privacy Policy is a legal statement that specifies what the business
        owner does with the personal data collected from users, along with how
        the data is processed and for what purposes.
      </p>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        In 1968, Council of Europe did studies on the threat of the Intemet
        expansion as they were concerned with the effects of technology on human
        rights. This lead to the development of policies that were to be
        developed to protect personal data.
      </p>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        This marks the start of what we know now as a "Privacy Policy.” While
        the name "Privacy Policy" refers to the legal agreement, the concept of
        privacy and protecting user data is closely related
      </p>

      <section className="flex justify-center mt-2">
        {" "}
        <button className="bg-orange-600 px-3 py-1 text-white font-bold border-2 border-black">
          <a href="../../../public/privacy.html" target="_blank">
            Accept Our Policy
          </a>
        </button>
      </section>
    </div>
  );
};

export default LinkSecond;
