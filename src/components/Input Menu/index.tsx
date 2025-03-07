import { FC } from "react";
import { Field, ErrorMessage } from 'formik';

interface InputProps {
    placeholder: string;
    title: string;
    name: string;
}

const InputMenu: FC<InputProps> = ({ title, placeholder, name }) => {
    return (
        <label htmlFor={placeholder} className="flex flex-col gap-3">
            <p className="text-lg font-normal">{title}</p>
            <Field type="text" placeholder={placeholder} name={name} className="text-[27px] focus:outline-none pb-3 border-b-2"/>
            <ErrorMessage name={name} component="div" className="text-red-500 text-xs"/>
        </label>

    );
}

export default InputMenu;