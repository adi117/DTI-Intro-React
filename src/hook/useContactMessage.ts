import { useState, useEffect } from "react";

interface ContactProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const useContactMessage= () => {
  const [contactList, setContactList] = useState<ContactProps[]>([]);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch("http://localhost:3000/contacts");
        if (!response.ok){
            throw new Error("Failed to fetch Contact data");
        }

        const data = await response.json();
        console.log(data);
        setContactList(Array.isArray(data) ?  data : []);
      } catch (error) {
        setError(error);
        setContactList([]);
      }
    };

    fetchContact();
  },[]);

  const addContact = async (contactData: ContactProps) => {
    try {
      const response = await fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(contactData),
        });

        if (!response.ok){
          throw new Error("Failed to fetch Contact data");
        }

        const newMessage = await response.json();
        setContactList((currentMessage) => [...currentMessage, newMessage]);
      } catch (error) {
        setError(error);
      }
    }
  return {contactList, error, addContact};
};

export default useContactMessage;