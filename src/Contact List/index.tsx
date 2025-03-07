import { FC} from "react";
import useContactMessage from "../hook/useContactMessage";

const ContactList: FC = () => {

    const { contactList } = useContactMessage();

    return (
        <div>
            {contactList.map((contact) => (
                <div key={contact.email}>
                    {contact.name}
                </div>
            ))}
        </div>
    );
}

export default ContactList;