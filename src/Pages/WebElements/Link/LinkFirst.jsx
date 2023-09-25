import React from "react";
import { Link } from "react-router-dom";

const LinkFirst = () => {
  return (
    <div className=" rounded-md p-4">
      <h2 className="font-bold text-[25px] pb-6">Terms and Conditions</h2>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        Help protect your website and its users with clear and fair website
        terms and conditions. These terms and conditions for a website set out
        key issues such as acceptable use, privacy, cookies, registration and
        passwords, intellectual property, links to other sites, termination and
        disclaimers of responsibility. Terms and conditions are used and
        necessary to protect a website owner from liability of a user relying on
        the information or the goods provided from the site then suffering a
        loss.
      </p>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        Making your own terms and conditions for your website is hard, not
        impossible, to do. It can take a few hours to few days for a person with
        no legal background to make. But worry no more; we are here to help you
        out.
      </p>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        All you need to do is fill up the blank spaces and then you will receive
        an email with your personalized terms and conditions.
      </p>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        {" "}
        <span className="font-bold text-black">
          Looking for a Privacy Policy?
        </span>{" "}
        Check out{" "}
        <Link to="/link/second-link" className="text-blue-600">
          Privacy Policy Generator.
        </Link>
      </p>
      <p className="pb-4 text-[16px] text-slate-600 pe-10">
        The accuracy of the generated document on this website is not legally
        binding. Use at your own risk.
      </p>
    </div>
  );
};

export default LinkFirst;
