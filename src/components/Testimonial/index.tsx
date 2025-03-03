import { FC } from "react";
import { Testimonial } from "../../constants/testimonialcard";


const Testimonials: FC<Testimonial> = ({username, photoProfile, testimonial, role}) => {

    return (
        <div className="flex flex-col gap-7">
            <div>
                <p className="text-3xl text-gray-600 font-normal">{testimonial}</p>
            </div>
            <div className="flex gap-3 justify-start items-center">
                <img className="w-16 rounded-full" src={photoProfile} alt="" />
                <div>
                    <p className="font-medium text-lg">{username}</p>
                    <p className="font-normal text-sm">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;