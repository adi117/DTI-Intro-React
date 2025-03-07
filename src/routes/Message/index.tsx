import { FC } from "react";
import useContactMessage from "../../hook/useContactMessage";
import Header from "../../components/Header";

const Message: FC = () => {

    const { contactList } = useContactMessage();

    return (
        <div className="bg-white flex flex-col justify-center items-center">
            <Header></Header>
            <div className="text-black w-fit h-screen pt-11">
            <table className="w-fit">
                <thead>
                    <tr className="border-2">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {contactList.map((contact) => (
                        <tr key={contact.email} className="border-solid py-1 border-x-2 ">
                            <td className="border-y-2 p-2 px-4">{contact.name}</td>
                            <td className="border-y-2 p-2 px-4">{contact.email}</td>
                            <td className="border-y-2 p-2 px-4">{contact.subject}</td>
                            <td className="border-y-2 p-2 px-4">{contact.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Message;