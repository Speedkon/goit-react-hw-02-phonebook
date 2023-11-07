import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
    number: Yup.string().matches(/^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/, "It must be min 5 numbers (1234567 or 123-45-67)").required('Required'),
});

export const ContactForm = ({onAdd}) => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={schema}
            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
            }}
        >

            <Form autoComplete="off">
                <label>
                    Name
                        <Field type="text" name="name" placeholder="New contact"/>
                        <ErrorMessage name="name" component="p"/>
                </label>
                <label>
                    Number
                        <Field type="tel" name="number" placeholder="Enter a number"/>
                        <ErrorMessage name="number" component="p"/>
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}