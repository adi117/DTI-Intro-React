import { FC } from 'react';
import InputMenu from '../Input Menu';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import ContactList from '../../Contact List';
import useContactMessage from '../../hook/useContactMessage';

interface FormProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Form: FC = () => {

    const {addContact} = useContactMessage();

    const initialValues: FormProps = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required!').min(3, "Minimum characters is 3 characters!"),
        email: Yup.string().email('Invalid email!').required('Email is required!'),
        subject: Yup.string().required('Subject is required!').min(10, "Minimum character is 10 characters!"),
        message: Yup.string().required('Message is required!').max(100, "Max character is 100 characters!")
    })

    const handleSubmit = async (
        values: FormProps,
        { setSubmitting, resetForm }: FormikHelpers<typeof initialValues>
    ) => {
        console.log(values);
        await addContact(values);
        setSubmitting(false);
        resetForm();
    }
    return (
        <div className="w-1/2 text-gray-950 gap-10 flex flex-col">
            <h1 className=" text-6xl font-medium">Let’s build something cool together</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <InputMenu title="Name" placeholder="James Robert" name='name'/>
                        <InputMenu title="Email" placeholder="ayush.barnwal@brightscout.com" name='email'/>
                        <InputMenu title="Subject" placeholder="For web design work Enquire" name='subject'/>
                        <InputMenu title="Message" placeholder="Type your Message" name='message'/>
                        <button
                        className='rounded-full px-16 py-6 !bg-gray-950 !text-white !text-lg w-fit h-fit'
                        onClick={() => console.log("test")
                        }
                        >
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
                <ContactList></ContactList>
        </div>
    );
}

export default Form;