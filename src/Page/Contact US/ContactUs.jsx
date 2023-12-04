import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";

const ContactUs = () => {
  return (
    <div>
      <SectionTitle heading="Contact Us" />

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-5">
        <div className="w-1/2">
          <img src="https://i.ibb.co/W5jQPDW/2650088.jpg" alt="" />
        </div>
        <div className="w-1/2 flex flex-col justify-center space-y-6">
          <div>
            <h4 className="text-2xl font-bold ">Get in Touch</h4>
            <p>
              We appreciate your interest in{" "}
              <span className="font-bold">Medical Camp Management</span> .
              Whether you have a question, <br/> need assistance, or simply want to
              connect with us, we are here for you. Please feel free to reach <br />
              out using the contact information below:
            </p>
          </div>

          <h3 className="text-xl font-bold ">Contact Information</h3>
          <div>
            <h3 className="text-xl font-bold ">Address :</h3>
            <p>Medical Camp Management Headquarters</p>
            <p>Dhaka</p>
          </div>
          <div>
            <h3 className="text-xl font-bold ">Email: </h3>
            <p>info@medicalcampmanagement.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
